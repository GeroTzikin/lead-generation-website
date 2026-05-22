import { CheckCircle, Clock, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTAButton } from "../components/CTAButton";

const benefits = [
  { icon: <Clock size={18} />, text: "Decisions in as little as 24 hours" },
  { icon: <TrendingUp size={18} />, text: "Rates starting from 5.9% APR" },
  { icon: <Shield size={18} />, text: "No hidden fees or early repayment charges" },
  { icon: <CheckCircle size={18} />, text: "Borrow up to $100,000" },
];

const faqs = [
  {
    q: "How quickly will I get a decision?",
    a: "Most applicants receive a decision within 24 hours. Funds can be deposited as soon as the next business day after approval.",
  },
  {
    q: "Will applying affect my credit score?",
    a: "Our initial check is a soft inquiry, which does not affect your credit score. A hard inquiry is only made upon full application with a lender.",
  },
  {
    q: "What can I use the loan for?",
    a: "Personal loans can be used for almost anything — debt consolidation, home improvements, medical bills, vacations, or any personal expense.",
  },
];

export function PersonalLoan() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "#0f2044" }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Personal Loan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15, 32, 68, 0.72)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Personal Loan</p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            Get the funds
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
              you deserve.
            </span>
          </h1>
          <p className="text-white/60 mb-10 max-w-xl mx-auto" style={{ fontSize: "17px", lineHeight: 1.6 }}>
            Simple online application, competitive rates, and fast funding. No waiting, no hassle — just money when you need it.
          </p>
          <CTAButton to="/get-started" variant="light">
            Check My Rate — Free
          </CTAButton>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Why choose ConvertX for your loan?
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

      {/* FAQ */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-black text-center mb-12" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Common Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border-l-4" style={{ borderColor: "#1d9bf0" }}>
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
            Ready to apply?
          </h2>
          <p className="text-white/50 text-sm mb-8">Takes 2 minutes. No credit impact. 100% free.</p>
          <CTAButton to="/get-started" variant="light">
            Get Started Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}