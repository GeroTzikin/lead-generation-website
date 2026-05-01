import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    id: "personal-loan",
    label: "Personal Loan",
    headline: "Cash when you need it most",
    description:
      "Access personal loans up to $100,000 with competitive rates. Fast approval, flexible terms, and no hidden fees.",
    image:
      "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Up to $100K",
    path: "/personal-loan",
    accent: "#f5a800",
  },
  {
    id: "car-warranty",
    label: "Car Warranty",
    headline: "Drive with confidence",
    description:
      "Extended vehicle protection plans that cover your car bumper to bumper. Peace of mind on every road.",
    image:
      "https://images.unsplash.com/photo-1773793339059-a7d2237966bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Full Coverage",
    path: "/car-warranty",
    accent: "#f5a800",
  },
  {
    id: "mortgage",
    label: "Mortgage",
    headline: "Your path to homeownership",
    description:
      "Competitive mortgage rates, expert guidance, and a seamless process from application to closing.",
    image:
      "https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Low Rates",
    path: "/mortgage",
    accent: "#f5a800",
  },
  {
    id: "home-warranty",
    label: "Home Warranty",
    headline: "Protect your biggest investment",
    description:
      "Comprehensive home warranty plans covering appliances, systems, and more. One call and it's handled.",
    image:
      "https://images.unsplash.com/photo-1758227365187-016878604d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Total Protection",
    path: "/home-warranty",
    accent: "#f5a800",
  },
];

function getRelativeIndex(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export function ServiceCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = services.length;

  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, paused]);

  return (
    <section className="py-24 overflow-hidden" style={{ background: "#f5f5f7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-black/40 uppercase tracking-widest mb-3">Our Services</p>
          <h2
            className="text-black"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Everything you need,
            <br />
            right here.
          </h2>
        </div>

        {/* Carousel Stage */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: "520px", perspective: "1200px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Yellow glow behind active card */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "420px",
              height: "340px",
              borderRadius: "40px",
              background: "radial-gradient(ellipse at center, rgba(245,168,0,0.38) 0%, rgba(245,168,0,0.10) 55%, transparent 80%)",
              filter: "blur(32px)",
              pointerEvents: "none",
              zIndex: 1,
              transition: "opacity 0.6s ease",
            }}
          />

          {services.map((service, i) => {
            const rel = getRelativeIndex(i, active, total);
            const isActive = rel === 0;
            const isLeft = rel === -1 || (rel === total - 1 && total > 2);
            const isRight = rel === 1 || (rel === -(total - 1) && total > 2);
            const isHidden = !isActive && !isLeft && !isRight;

            let translateX = 0;
            let translateZ = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (isActive) {
              translateX = 0;
              translateZ = 80;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (isLeft) {
              translateX = -310;
              translateZ = -60;
              rotateY = 18;
              scale = 0.82;
              opacity = 0.55;
              zIndex = 10;
            } else if (isRight) {
              translateX = 310;
              translateZ = -60;
              rotateY = -18;
              scale = 0.82;
              opacity = 0.55;
              zIndex = 10;
            } else {
              translateX = rel < 0 ? -600 : 600;
              translateZ = -200;
              scale = 0.6;
              opacity = 0;
              zIndex = 1;
            }

            return (
              <motion.div
                key={service.id}
                onClick={() => { if (!isActive) setActive(i); }}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY,
                  scale,
                  opacity,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 32, mass: 1 }}
                style={{
                  position: "absolute",
                  width: "340px",
                  zIndex,
                  cursor: isActive ? "default" : "pointer",
                  transformStyle: "preserve-3d",
                  visibility: isHidden ? "hidden" : "visible",
                }}
              >
                <Link
                  to={service.path}
                  className="block rounded-3xl overflow-hidden bg-white shadow-2xl"
                  style={{
                    pointerEvents: isActive ? "auto" : "none",
                    boxShadow: isActive
                      ? "0 32px 80px rgba(15,32,68,0.18), 0 0 0 1px rgba(245,168,0,0.12)"
                      : "0 8px 32px rgba(15,32,68,0.12)",
                  }}
                  tabIndex={isActive ? 0 : -1}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "220px" }}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.label}
                      className="w-full h-full object-cover"
                      style={{ transform: isActive ? "scale(1.04)" : "scale(1)", transition: "transform 0.6s ease" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 30%, #0f2044dd)" }}
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
                    <p className="text-black/40 text-xs uppercase tracking-widest mb-2">{service.label}</p>
                    <h3
                      className="text-black mb-2"
                      style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.02em" }}
                    >
                      {service.headline}
                    </h3>
                    <p className="text-black/50 text-sm leading-relaxed mb-5">{service.description}</p>
                    <div
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full"
                      style={{ fontWeight: 600, background: "#0f2044", color: "white" }}
                    >
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: "#0f2044", color: "white" }}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "99px",
                  background: i === active ? "#f5a800" : "rgba(15,32,68,0.2)",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: "#0f2044", color: "white" }}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex justify-center mt-5">
          <div className="relative w-40 h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(15,32,68,0.12)" }}>
            <motion.div
              key={active}
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ background: "#f5a800" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: paused ? 0 : 3.5, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
