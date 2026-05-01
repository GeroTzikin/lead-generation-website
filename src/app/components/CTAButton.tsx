import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

// "light" = white btn on dark/navy bg → hovers to yellow
// "dark"  = navy btn on light bg       → hovers to yellow
export function CTAButton({ to, children, variant = "light", className = "" }: CTAButtonProps) {
  const [hovered, setHovered] = useState(false);

  const lightStyle = {
    background: hovered ? "#f5a800" : "#ffffff",
    color: "#0f2044",
    fontWeight: 600 as const,
    transition: "background 0.25s ease, transform 0.2s ease",
    transform: hovered ? "scale(1.03)" : "scale(1)",
  };

  const darkStyle = {
    background: hovered ? "#f5a800" : "#0f2044",
    color: hovered ? "#0f2044" : "#ffffff",
    fontWeight: 600 as const,
    transition: "background 0.25s ease, color 0.25s ease, transform 0.2s ease",
    transform: hovered ? "scale(1.03)" : "scale(1)",
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 text-sm px-8 py-4 rounded-full ${className}`}
      style={variant === "light" ? lightStyle : darkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children} <ArrowRight size={16} />
    </Link>
  );
}

interface PlanButtonProps {
  to: string;
  children: React.ReactNode;
  highlighted?: boolean;
}

export function PlanButton({ to, children, highlighted = false }: PlanButtonProps) {
  const [hovered, setHovered] = useState(false);

  const highlightedStyle = {
    background: hovered ? "#f5a800" : "#ffffff",
    color: hovered ? "#0f2044" : "#0f2044",
    fontWeight: 600 as const,
    transition: "background 0.25s ease",
  };

  const defaultStyle = {
    background: hovered ? "#f5a800" : "rgba(15,32,68,0.07)",
    color: hovered ? "#0f2044" : "#0f2044",
    fontWeight: 600 as const,
    transition: "background 0.25s ease",
  };

  return (
    <Link
      to={to}
      className="mt-7 w-full py-3 rounded-full text-sm text-center block"
      style={highlighted ? highlightedStyle : defaultStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}
