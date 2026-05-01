import { CheckCircle, Wrench, Phone, Car } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTAButton, PlanButton } from "../components/CTAButton";

const benefits = [
  { icon: <Wrench size={18} />, text: "Covers engine, transmission, and 2,000+ parts" },
  { icon: <Phone size={18} />, text: "24/7 roadside assistance included" },
  { icon: <Car size={18} />, text: "Use any licensed repair shop nationwide" },
  { icon: <CheckCircle size={18} />, text: "Plans starting from $99/month" },
];

const faqs = [
  {
    q: "What vehicles are eligible?",
    a: "We cover most vehicles up to 15 years old with up to 200,000 miles. Commercial vehicles and salvage-title cars are excluded.",
  },
  {
    q: "Can I choose my own mechanic?",
    a: "Yes. Our plans are accepted at any ASE-certified repair facility nationwide, including dealerships.",
  },
  {
    q: "Is there a waiting period?",
    a: "There is typically a 30-day / 1,000-mile waiting period for coverage to become active. Some plans offer immediate coverage.",
  },
];

export function CarWarranty() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "#0f2044" }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773793339059-a7d2237966bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Car Warranty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15, 32, 68, 0.72)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Car Warranty</p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Drive worry-free,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
              every mile.
            </span>
          </h1>
          <p className="text-white/60 mb-10 max-w-xl mx-auto" style={{ fontSize: "17px", lineHeight: 1.6 }}>
            Extended vehicle protection that goes beyond your factory warranty. Comprehensive coverage at an affordable price.
          </p>
          <CTAButton to="/get-started" variant="light">
            Get a Free Quote
          </CTAButton>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            What's included in your plan?
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

      {/* Coverage tiers */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Coverage Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Powertrain",
                price: "From $79/mo",
                desc: "Covers your engine, transmission, and drive axle — the most critical and expensive components.",
                items: ["Engine", "Transmission", "Drive Axle", "Seals & Gaskets"],
                highlight: false,
              },
              {
                name: "Enhanced",
                price: "From $129/mo",
                desc: "Everything in Powertrain plus electrical, A/C, heating, and more.",
                items: ["All Powertrain", "Electrical", "A/C & Heating", "Steering"],
                highlight: true,
              },
              {
                name: "Exclusionary",
                price: "From $179/mo",
                desc: "Our most comprehensive plan — covers everything except a short list of excluded items.",
                items: ["All Enhanced", "2,000+ Parts", "Roadside Assist", "Rental Coverage"],
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-7 relative ${tier.highlight ? "text-white shadow-xl scale-105" : "bg-white text-black"}`}
                style={tier.highlight ? { background: "#0f2044" } : {}}
              >
                {tier.highlight && (
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "#f5a800" }}>Most Popular</div>
                )}
                <h3 className={`mb-1 ${tier.highlight ? "text-white" : "text-black"}`} style={{ fontSize: "20px", fontWeight: 600 }}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlight ? "text-white/50" : "text-black/50"}`}>{tier.price}</p>
                <p className={`text-sm mb-5 leading-relaxed ${tier.highlight ? "text-white/70" : "text-black/60"}`}>{tier.desc}</p>
                <ul className="flex flex-col gap-2">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} style={{ color: tier.highlight ? "#f5a800" : "#0f2044" }} />
                      <span className={tier.highlight ? "text-white/80" : "text-black/70"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <PlanButton to="/get-started" highlighted={tier.highlight}>
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
            Ready to protect your vehicle?
          </h2>
          <p className="text-white/50 text-sm mb-8">Compare plans in under 2 minutes. No obligation.</p>
          <CTAButton to="/get-started" variant="light">
            View My Options — Free
          </CTAButton>
        </div>
      </section>
    </div>
  );
}