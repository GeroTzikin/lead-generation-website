import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2, ChevronDown } from "lucide-react";
import { Link } from "react-router";

// ─── Service-specific extra fields ────────────────────────────────────────────

const serviceFields: Record<string, { name: string; label: string; type: "text" | "select"; placeholder?: string; options?: string[] }[]> = {
  "Personal Loan": [
    {
      name: "loanAmount",
      label: "Loan Amount Needed",
      type: "select",
      options: ["$1,000 – $5,000", "$5,001 – $15,000", "$15,001 – $35,000", "$35,001 – $100,000"],
    },
    {
      name: "purpose",
      label: "Loan Purpose",
      type: "select",
      options: ["Debt Consolidation", "Home Improvement", "Medical Bills", "Vehicle Purchase", "Education", "Other"],
    },
    {
      name: "creditScore",
      label: "Estimated Credit Score",
      type: "select",
      options: ["Excellent (750+)", "Good (700–749)", "Fair (640–699)", "Poor (Below 640)", "Not Sure"],
    },
  ],
  "Car Warranty": [
    {
      name: "vehicleYear",
      label: "Vehicle Year",
      type: "select",
      options: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014 or older"],
    },
    { name: "vehicleMake", label: "Vehicle Make", type: "text", placeholder: "e.g. Toyota" },
    { name: "vehicleModel", label: "Vehicle Model", type: "text", placeholder: "e.g. Camry" },
    {
      name: "mileage",
      label: "Current Mileage",
      type: "select",
      options: ["Under 25,000", "25,000 – 75,000", "75,001 – 125,000", "125,001 – 175,000", "Over 175,000"],
    },
  ],
  "Mortgage": [
    {
      name: "loanType",
      label: "I'm Looking To",
      type: "select",
      options: ["Purchase a Home", "Refinance my Home", "Take Cash Out", "Not Sure Yet"],
    },
    {
      name: "purchasePrice",
      label: "Purchase Price / Home Value",
      type: "select",
      options: ["Under $150,000", "$150,000 – $300,000", "$300,001 – $500,000", "$500,001 – $750,000", "$750,001 – $1,000,000", "Over $1,000,000"],
    },
    {
      name: "creditScore",
      label: "Estimated Credit Score",
      type: "select",
      options: ["Excellent (760+)", "Good (720–759)", "Fair (680–719)", "Below Average (620–679)", "Not Sure"],
    },
    {
      name: "employment",
      label: "Employment Status",
      type: "select",
      options: ["Full-Time Employee", "Self-Employed", "Part-Time Employee", "Retired", "Other"],
    },
  ],
  "Home Warranty": [
    { name: "address", label: "Property Address", type: "text", placeholder: "123 Main St, City, State" },
    {
      name: "propertyType",
      label: "Property Type",
      type: "select",
      options: ["Single Family Home", "Townhouse", "Condo / Apartment", "Mobile Home", "Multi-Family"],
    },
    {
      name: "squareFootage",
      label: "Home Size",
      type: "select",
      options: ["Under 1,000 sq ft", "1,000 – 2,000 sq ft", "2,001 – 3,000 sq ft", "3,001 – 4,000 sq ft", "Over 4,000 sq ft"],
    },
    {
      name: "ownership",
      label: "I Am A",
      type: "select",
      options: ["Homeowner", "Home Buyer", "Real Estate Agent", "Property Manager"],
    },
  ],
};

const serviceAccent: Record<string, string> = {
  "Personal Loan": "#0f2044",
  "Mortgage": "#0f2044",
  "Car Warranty": "#0f2044",
  "Home Warranty": "#0f2044",
};

// ─── TCPA SMS consent disclosures ──────────────────────────────────────────────
// Exact wording shown beside each checkbox. Kept as constants so the same text
// can be stored with the lead as documented proof of consent (TCPA record-keeping).

const MARKETING_SMS_CONSENT =
  "Marketing text messages (optional). I agree to receive recurring automated marketing and promotional text messages (offers, deals, and tips) from ConvertX Lead Generation at the phone number provided. Consent is not a condition of any purchase or service. Message frequency varies. Msg & data rates may apply. Reply STOP to unsubscribe, HELP for help. See our Terms & Conditions and Privacy Policy.";

const ACCOUNT_NOTIFICATIONS_CONSENT =
  "Account notifications (optional). I agree to receive automated text messages from ConvertX Lead Generation about my request, application status, and account updates at the phone number provided. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.";

// ─── Custom Checkbox ───────────────────────────────────────────────────────────

function CustomCheckbox({
  id,
  checked,
  onChange,
  accentColor,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  accentColor: string;
}) {
  return (
    <button
      type="button"
      id={id}
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 mt-0.5"
      style={{
        background: checked ? accentColor : "transparent",
        borderColor: checked ? accentColor : "#d1d5db",
        focusRingColor: accentColor,
      }}
    >
      {checked && (
        <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
          <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export function GetStarted() {
  const [selectedService, setSelectedService] = useState("");
  // SMS opt-ins — both optional, both unchecked by default (required for TCPA express consent).
  const [marketingSms, setMarketingSms] = useState(false);
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const accentColor = serviceAccent[selectedService] || "#0f2044";
  const extraFields = selectedService ? serviceFields[selectedService] : [];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: Record<string, any>) => {
    if (!termsAccepted) {
      setTermsError(true);
      return;
    }
    setTermsError(false);
    setLoading(true);

    // TCPA record-keeping: capture which SMS consents were granted, the exact
    // disclosure text shown, the consenting phone number, and a timestamp.
    // Wire `submission` to your backend/CRM to persist proof of consent (retain ≥ 5 years).
    const submission = {
      ...data,
      smsConsent: {
        marketing: {
          granted: marketingSms,
          disclosure: marketingSms ? MARKETING_SMS_CONSENT : null,
        },
        accountNotifications: {
          granted: accountNotifications,
          disclosure: accountNotifications ? ACCOUNT_NOTIFICATIONS_CONSENT : null,
        },
        phone: data.phone ?? null,
        capturedAt: new Date().toISOString(),
      },
      termsAccepted,
    };
    console.log("ConvertX lead submission", submission);

    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSelectedService("");
    setMarketingSms(false);
    setAccountNotifications(false);
    setTermsAccepted(false);
    setTermsError(false);
    reset();
  };

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-6 pt-24 pb-16">
        <div className="bg-white rounded-3xl p-12 shadow-xl max-w-md w-full text-center flex flex-col items-center gap-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: accentColor + "15" }}
          >
            <CheckCircle size={40} style={{ color: accentColor }} />
          </div>
          <div>
            <h2 className="text-black" style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.02em" }}>
              You're all set!
            </h2>
            <p className="text-black/50 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
              Thank you for your interest in our <strong className="text-black/70">{selectedService}</strong> service. A specialist will reach out within 24 hours to discuss your options.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full mt-2">
            <button
              onClick={handleReset}
              className="w-full text-white text-sm py-3.5 rounded-full transition-all hover:opacity-90"
              style={{ background: accentColor }}
            >
              Submit Another Request
            </button>
            <Link
              to="/"
              className="w-full text-sm py-3.5 rounded-full text-center bg-black/5 text-black/60 hover:bg-black/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Page Hero */}
      <section
        className="pt-28 pb-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0a1528 0%, #0f2044 100%)" }}
      >
        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Get Started</p>
        <h1
          className="text-white mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.08 }}
        >
          Find your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
            perfect plan.
          </span>
        </h1>
        <p className="text-white/60 max-w-xl mx-auto" style={{ fontSize: "17px", lineHeight: 1.6 }}>
          Select a service below and fill in your details. A ConvertX specialist will match you with the best options in 24 hours — completely free.
        </p>
      </section>

      {/* Form Card */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-black" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Your Information
              </h2>
              <p className="text-black/40 text-sm mt-1">Takes 2 minutes. No credit impact.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>

              {/* ── Row: First + Last Name ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-black/70 mb-1.5" style={{ fontWeight: 500 }}>
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    {...register("firstName", { required: true })}
                    className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all placeholder:text-black/30"
                    style={{ border: errors.firstName ? "1.5px solid #ef4444" : "1.5px solid transparent" }}
                  />
                  {errors.firstName && <p className="text-red-400 text-xs mt-1">Required</p>}
                </div>
                <div>
                  <label className="block text-sm text-black/70 mb-1.5" style={{ fontWeight: 500 }}>
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    {...register("lastName", { required: true })}
                    className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all placeholder:text-black/30"
                    style={{ border: errors.lastName ? "1.5px solid #ef4444" : "1.5px solid transparent" }}
                  />
                  {errors.lastName && <p className="text-red-400 text-xs mt-1">Required</p>}
                </div>
              </div>

              {/* ── Email ── */}
              <div>
                <label className="block text-sm text-black/70 mb-1.5" style={{ fontWeight: 500 }}>
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: true,
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                  })}
                  className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all placeholder:text-black/30"
                  style={{ border: errors.email ? "1.5px solid #ef4444" : "1.5px solid transparent" }}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {(errors.email?.message as string) || "Required"}
                  </p>
                )}
              </div>

              {/* ── Phone ── */}
              <div>
                <label className="block text-sm text-black/70 mb-1.5" style={{ fontWeight: 500 }}>
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  {...register("phone", { required: true })}
                  className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all placeholder:text-black/30"
                  style={{ border: errors.phone ? "1.5px solid #ef4444" : "1.5px solid transparent" }}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">Required</p>}
              </div>

              {/* ── Service Dropdown ── */}
              <div>
                <label className="block text-sm text-black/70 mb-1.5" style={{ fontWeight: 500 }}>
                  I'm interested in… <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    {...register("service", { required: true })}
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                    }}
                    className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 appearance-none cursor-pointer transition-all pr-10"
                    style={{ border: errors.service ? "1.5px solid #ef4444" : "1.5px solid transparent" }}
                  >
                    <option value="">Select a service…</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Car Warranty">Car Warranty</option>
                    <option value="Mortgage">Mortgage</option>
                    <option value="Home Warranty">Home Warranty</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none" />
                </div>
                {errors.service && <p className="text-red-400 text-xs mt-1">Please select a service</p>}
              </div>

              {/* ── Dynamic Service Fields ── */}
              {selectedService && extraFields.length > 0 && (
                <div
                  className="flex flex-col gap-5 pt-5 border-t"
                  style={{ borderColor: "rgba(0,0,0,0.07)" }}
                >
                  <p className="text-xs uppercase tracking-widest text-black/30" style={{ fontWeight: 500 }}>
                    {selectedService} Details
                  </p>
                  {extraFields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm text-black/70 mb-1.5" style={{ fontWeight: 500 }}>
                        {field.label} <span className="text-red-400">*</span>
                      </label>
                      {field.type === "select" ? (
                        <div className="relative">
                          <select
                            {...register(field.name, { required: true })}
                            className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 appearance-none cursor-pointer transition-all pr-10"
                            style={{
                              border: errors[field.name] ? "1.5px solid #ef4444" : "1.5px solid transparent",
                            }}
                          >
                            <option value="">Select an option</option>
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none" />
                        </div>
                      ) : (
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          {...register(field.name, { required: true })}
                          className="w-full bg-[#f5f5f7] text-black text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all placeholder:text-black/30"
                          style={{
                            border: errors[field.name] ? "1.5px solid #ef4444" : "1.5px solid transparent",
                          }}
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-red-400 text-xs mt-1">This field is required</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* ── Divider ── */}
              <div className="border-t pt-6 mt-1 flex flex-col gap-4" style={{ borderColor: "rgba(0,0,0,0.07)" }}>

                {/* ── Marketing SMS Opt-in (optional · TCPA express written consent) ── */}
                <div className="flex items-start gap-3">
                  <CustomCheckbox
                    id="marketingSms"
                    checked={marketingSms}
                    onChange={setMarketingSms}
                    accentColor={accentColor}
                  />
                  <label htmlFor="marketingSms" className="text-sm text-black/60 leading-relaxed cursor-pointer select-none" onClick={() => setMarketingSms(!marketingSms)}>
                    <span className="text-black/80" style={{ fontWeight: 500 }}>Marketing text messages.</span>
                    <span className="text-black/30"> (optional)</span>
                    {" "}I agree to receive recurring automated marketing &amp; promotional text messages (offers, deals, and tips) from ConvertX Lead Generation at the phone number provided. Consent is not a condition of any purchase or service. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to unsubscribe, HELP for help. See our{" "}
                    <Link to="/terms-of-use" className="underline hover:opacity-70 transition-opacity" style={{ color: "#1d9bf0" }} onClick={(e) => e.stopPropagation()}>
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <a href="#" className="underline hover:opacity-70 transition-opacity" style={{ color: "#1d9bf0" }} onClick={(e) => e.stopPropagation()}>
                      Privacy Policy
                    </a>.
                  </label>
                </div>

                {/* ── Account Notifications SMS Opt-in (optional · TCPA) ── */}
                <div className="flex items-start gap-3">
                  <CustomCheckbox
                    id="accountNotifications"
                    checked={accountNotifications}
                    onChange={setAccountNotifications}
                    accentColor={accentColor}
                  />
                  <label htmlFor="accountNotifications" className="text-sm text-black/60 leading-relaxed cursor-pointer select-none" onClick={() => setAccountNotifications(!accountNotifications)}>
                    <span className="text-black/80" style={{ fontWeight: 500 }}>Account notifications.</span>
                    <span className="text-black/30"> (optional)</span>
                    {" "}I agree to receive automated text messages from ConvertX Lead Generation about my request, application status, and account updates at the phone number provided. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help.
                  </label>
                </div>

                {/* ── Terms Checkbox (mandatory) ── */}
                <div>
                  <div className="flex items-start gap-3">
                    <CustomCheckbox
                      id="terms"
                      checked={termsAccepted}
                      onChange={(v) => {
                        setTermsAccepted(v);
                        if (v) setTermsError(false);
                      }}
                      accentColor={accentColor}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-black/60 leading-relaxed cursor-pointer select-none"
                      onClick={() => {
                        const next = !termsAccepted;
                        setTermsAccepted(next);
                        if (next) setTermsError(false);
                      }}
                    >
                      <span className="text-black/80" style={{ fontWeight: 500 }}>I agree to the Terms & Conditions.</span>
                      {" "}By submitting this form I confirm I have read and accept the{" "}
                      <a href="#" className="underline hover:opacity-70 transition-opacity" style={{ color: "#1d9bf0" }}>
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline hover:opacity-70 transition-opacity" style={{ color: "#1d9bf0" }}>
                        Privacy Policy
                      </a>. <span className="text-red-400">*</span>
                    </label>
                  </div>
                  {termsError && (
                    <p className="text-red-400 text-xs mt-2 ml-8">
                      You must accept the Terms & Conditions to proceed.
                    </p>
                  )}
                </div>
              </div>

              {/* ── Submit ── */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full text-white text-sm py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                style={{ background: "#0f2044" }}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Processing your request…
                  </>
                ) : (
                  `Submit${selectedService ? ` — ${selectedService}` : ""}`
                )}
              </button>

              <p className="text-center text-xs text-black/30">
                No credit check required · 100% free to apply · No obligation
              </p>
            </form>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { value: "250K+", label: "Customers Helped" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "24hr", label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl py-5 px-3 shadow-sm">
                <div className="text-black" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em" }}>
                  {s.value}
                </div>
                <div className="text-black/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
