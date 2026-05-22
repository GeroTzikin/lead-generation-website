import { CheckCircle, Percent, Home, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTAButton } from "../components/CTAButton";

const benefits = [
  { icon: <Percent size={18} />, text: "Fixed & variable rates from 6.25% APR" },
  { icon: <Home size={18} />, text: "Loans from $100K to $3M+" },
  { icon: <FileText size={18} />, text: "Pre-approval letter in 24 hours" },
  { icon: <CheckCircle size={18} />, text: "FHA, VA, Conventional & Jumbo loans" },
];

const faqs = [
  {
    q: "What credit score do I need for a mortgage?",
    a: "Conventional loans typically require a 620+ score. FHA loans may allow scores as low as 580 with a 3.5% down payment.",
  },
  {
    q: "How much down payment do I need?",
    a: "Down payments range from 0% (VA loans) to 3% (Conventional), 3.5% (FHA) or more. We'll help you find the best option for your situation.",
  },
  {
    q: "How long does the mortgage process take?",
    a: "From application to closing, the average mortgage takes 30–45 days. Pre-approval can happen within 24 hours.",
  },
  {
    q: "Can I refinance my existing mortgage?",
    a: "Yes! We connect you with lenders for both purchase mortgages and refinancing to lower rates, shorter terms, or cash-out options.",
  },
];

const loanTypes = [
  { name: "Conventional", rate: "6.25%", desc: "Best for borrowers with good credit and 3%+ down payment." },
  { name: "FHA Loan", rate: "6.50%", desc: "Government-backed loan ideal for first-time buyers with lower credit." },
  { name: "VA Loan", rate: "5.99%", desc: "Exclusive 0% down payment loan for veterans and service members." },
  { name: "Jumbo Loan", rate: "6.75%", desc: "For home purchases above conforming loan limits — $766,550+." },
];

export function Mortgage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "#0f2044" }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Mortgage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15, 32, 68, 0.72)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Mortgage</p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Your dream home
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
              starts here.
            </span>
          </h1>
          <p className="text-white/60 mb-10 max-w-xl mx-auto" style={{ fontSize: "17px", lineHeight: 1.6 }}>
            Whether you're buying your first home or refinancing, we connect you with top lenders offering the lowest rates.
          </p>
          <CTAButton to="/get-started" variant="light">
            See My Mortgage Options
          </CTAButton>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Why choose ConvertX for your mortgage?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-4 bg-[#f5f5f7] rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#0f2044" }}>
                  <span style={{ color: "#1d9bf0" }}>{b.icon}</span>
                </div>
                <span className="text-sm text-black/70">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Loan Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {loanTypes.map((loan) => (
              <div key={loan.name} className="bg-white rounded-2xl p-6 flex items-start gap-4 border-l-4" style={{ borderColor: "#1d9bf0" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#0f2044" }}>
                  <Home size={20} style={{ color: "#1d9bf0" }} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-black" style={{ fontSize: "16px", fontWeight: 600 }}>{loan.name}</h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(29,155,240,0.12)", color: "#0b6cb0", fontWeight: 600 }}
                    >
                      From {loan.rate}
                    </span>
                  </div>
                  <p className="text-black/50 text-sm leading-relaxed">{loan.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Common Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#f5f5f7] rounded-2xl p-6 border-l-4" style={{ borderColor: "#1d9bf0" }}>
                <h4 className="mb-2" style={{ fontSize: "16px", fontWeight: 600, color: "#0f2044" }}>{faq.q}</h4>
                <p className="text-black/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1528 0%, #0f2044 100%)" }}>
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-white mb-4" style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Ready to find your rate?
          </h2>
          <p className="text-white/50 text-sm mb-8">Free pre-approval with no credit impact.</p>
          <CTAButton to="/get-started" variant="light">
            Get Pre-Approved Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}