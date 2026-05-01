import { Link } from "react-router";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Zap, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ServiceCarousel } from "../components/ServiceCarousel";

const services = [
  {
    id: "personal-loan",
    label: "Personal Loan",
    headline: "Cash when you need it most",
    description:
      "Access personal loans up to $100,000 with competitive rates. Fast approval, flexible terms, and no hidden fees.",
    image:
      "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#0f2044",
    badge: "Up to $100K",
    path: "/personal-loan",
  },
  {
    id: "car-warranty",
    label: "Car Warranty",
    headline: "Drive with confidence",
    description:
      "Extended vehicle protection plans that cover your car bumper to bumper. Peace of mind on every road.",
    image:
      "https://images.unsplash.com/photo-1773793339059-a7d2237966bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#0f2044",
    badge: "Full Coverage",
    path: "/car-warranty",
  },
  {
    id: "mortgage",
    label: "Mortgage",
    headline: "Your path to homeownership",
    description:
      "Competitive mortgage rates, expert guidance, and a seamless process from application to closing.",
    image:
      "https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#0f2044",
    badge: "Low Rates",
    path: "/mortgage",
  },
  {
    id: "home-warranty",
    label: "Home Warranty",
    headline: "Protect your biggest investment",
    description:
      "Comprehensive home warranty plans covering appliances, systems, and more. One call and it's handled.",
    image:
      "https://images.unsplash.com/photo-1758227365187-016878604d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    color: "#0f2044",
    badge: "Total Protection",
    path: "/home-warranty",
  },
];

const stats = [
  { value: "250K+", label: "Customers Helped" },
  { value: "$2.4B", label: "Loans Facilitated" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24hr", label: "Approval Time" },
];

const features = [
  {
    icon: <Zap size={22} />,
    title: "Instant Matching",
    description: "Our smart system matches you with the best lenders and providers in seconds.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Secure & Private",
    description: "Your data is encrypted and never sold. We keep your information completely safe.",
  },
  {
    icon: <Users size={22} />,
    title: "Expert Support",
    description: "A dedicated team of specialists ready to guide you through every step.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Best Rates",
    description: "We negotiate on your behalf to ensure you always get the most competitive terms.",
  },
];

function ServiceCard({ service }: { service: typeof services[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={service.path}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={service.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 30%, ${service.color}dd)`,
          }}
        />
        <div
          className="absolute top-4 left-4 text-white text-xs px-3 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", fontWeight: 500 }}
        >
          {service.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-black/40 text-xs uppercase tracking-widest mb-2">
          {service.label}
        </p>
        <h3
          className="text-black mb-2"
          style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em" }}
        >
          {service.headline}
        </h3>
        <p className="text-black/50 text-sm leading-relaxed mb-5">
          {service.description}
        </p>
        <div
          className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-all duration-300"
          style={{
            fontWeight: 600,
            background: hovered ? "#f5a800" : "#0f2044",
            color: hovered ? "#0f2044" : "white",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          Learn more <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

export function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768101715599-ac4b5190b2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Financial services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-24">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-white/80 text-xs tracking-wide">
              Trusted by 250,000+ customers nationwide
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Your financial future,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400">
              simplified.
            </span>
          </h1>

          <p
            className="text-white/60 mx-auto mb-10 max-w-2xl"
            style={{ fontSize: "19px", lineHeight: 1.6 }}
          >
            Personal loans, car warranties, mortgages, and home warranties — all in one place. Find the perfect plan tailored to your needs in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="text-sm px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-200"
              style={{ background: "#f5a800", color: "#0f2044", fontWeight: 600 }}
            >
              Get Started Free <ArrowRight size={16} />
            </Link>
            <Link
              to="/mortgage"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-150"
            >
              Compare Options
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-black"
                  style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </div>
                <div className="text-black/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServiceCarousel />

      {/* Why Choose Us */}
      <section className="py-24" style={{ background: "#0f2044" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Why ConvertX</p>
            <h2
              className="text-white"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              Designed around you.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#ffffff" }}>
                  <span style={{ color: "#f5a800" }}>{feature.icon}</span>
                </div>
                <h4
                  className="text-white mb-2"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-black mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Ready to take the next step?
          </h2>
          <p className="mb-10" style={{ fontSize: "18px", color: "rgba(0,0,0,0.45)" }}>
            Join hundreds of thousands of people who found their perfect financial solution with ConvertX Lead Generation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="text-sm px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-200 hover:opacity-90"
              style={{ background: "#0f2044", color: "white", fontWeight: 600 }}
            >
              Apply Now — It's Free <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}