import { CheckCircle, Home, Wrench, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTAButton, PlanButton } from "../components/CTAButton";

const benefits = [
  { icon: <Wrench size={18} />, text: "Covers HVAC, plumbing, electrical & appliances" },
  { icon: <Home size={18} />, text: "Plans from just $39/month" },
  { icon: <Star size={18} />, text: "Access to 15,000+ pre-screened contractors" },
  { icon: <CheckCircle size={18} />, text: "No inspection required to enroll" },
];

const faqs = [
  {
    q: "What does a home warranty cover?",
    a: "Depending on your plan, coverage can include HVAC systems, plumbing, electrical, kitchen appliances, washer/dryer, pool equipment, and more.",
  },
  {
    q: "How do I file a claim?",
    a: "Simply call or use our app to submit a claim. We'll dispatch a pre-screened contractor to your home — usually within 24–48 hours.",
  },
  {
    q: "Is there a service call fee?",
    a: "Most plans include a flat service call fee of $75–$125 per claim, regardless of the actual repair cost.",
  },
  {
    q: "Can I keep my current contractors?",
    a: "Our Standard plans require using our network. Our Premium plans allow you to use your preferred contractors with reimbursement.",
  },
];

const plans = [
  {
    name: "Appliance",
    price: "$39/mo",
    items: ["Refrigerator", "Dishwasher", "Oven & Range", "Washer & Dryer", "Garbage Disposal"],
    highlight: false,
  },
  {
    name: "Systems",
    price: "$59/mo",
    items: ["Heating System", "Central A/C", "Plumbing", "Electrical Panel", "Water Heater"],
    highlight: false,
  },
  {
    name: "Complete",
    price: "$89/mo",
    items: ["All Appliances", "All Systems", "Roof Leak Repair", "Pest Control", "Pro Installation"],
    highlight: true,
  },
];

export function HomeWarranty() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "#0f2044" }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758227365187-016878604d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Home Warranty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15, 32, 68, 0.72)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Home Warranty</p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Protect your home,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
              protect your wallet.
            </span>
          </h1>
          <p className="text-white/60 mb-10 max-w-xl mx-auto" style={{ fontSize: "17px", lineHeight: 1.6 }}>
            When your home's systems and appliances break down, a home warranty ensures you're never stuck with an enormous repair bill.
          </p>
          <CTAButton to="/get-started" variant="light">
            See My Coverage Options
          </CTAButton>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Why choose ConvertX for your home?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-4 bg-[#f5f5f7] rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#0f2044" }}>
                  <span style={{ color: "#f5a800" }}>{b.icon}</span>
                </div>
                <span className="text-sm text-black/70">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-black text-center mb-3" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Choose Your Plan
          </h2>
          <p className="text-center text-black/40 text-sm mb-12">All plans include 24/7 support and fast dispatch.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-7 relative ${plan.highlight ? "text-white shadow-2xl" : "bg-white text-black"}`}
                style={plan.highlight ? { background: "#0f2044" } : {}}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full shadow"
                    style={{ background: "#f5a800", color: "#0f2044", fontWeight: 700 }}
                  >
                    Best Value
                  </div>
                )}
                <h3
                  className={`mb-1 ${plan.highlight ? "text-white" : "text-black"}`}
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  {plan.name}
                </h3>
                <p className={`mb-5 ${plan.highlight ? "text-white/50" : "text-black/40"}`} style={{ fontSize: "13px" }}>
                  {plan.price}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} style={{ color: plan.highlight ? "#f5a800" : "#0f2044" }} />
                      <span className={plan.highlight ? "text-white/80" : "text-black/70"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <PlanButton to="/get-started" highlighted={plan.highlight}>
                  Get This Plan
                </PlanButton>
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
              <div key={faq.q} className="bg-[#f5f5f7] rounded-2xl p-6 border-l-4" style={{ borderColor: "#f5a800" }}>
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
            Ready to protect your home?
          </h2>
          <p className="text-white/50 text-sm mb-8">Free quote. No home inspection needed.</p>
          <CTAButton to="/get-started" variant="light">
            Get Protected Today
          </CTAButton>
        </div>
      </section>
    </div>
  );
}