import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import fullLogo from "../../imports/convertx-full-highres-better-1.png";
import iconLogo from "../../imports/convertx-icon-highres-better-1.png";

const navLinks = [
  { label: "Personal Loan", path: "/personal-loan" },
  { label: "Car Warranty", path: "/car-warranty" },
  { label: "Mortgage", path: "/mortgage" },
  { label: "Home Warranty", path: "/home-warranty" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/8 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center group"
        >
          <div className="flex items-center gap-2.5">
            <img
              src={iconLogo}
              alt="ConvertX"
              className="h-9 w-9 object-contain"
            />
            <span
              className="hidden sm:block transition-colors duration-300"
              style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em", color: scrolled ? "#0f2044" : "white" }}
            >
              ConvertX <span style={{ color: "#f5a800" }}>Lead Generation</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors duration-150 ${
                scrolled
                  ? location.pathname === link.path
                    ? "text-black font-medium"
                    : "text-black/60 hover:text-black"
                  : location.pathname === link.path
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/get-started"
            className="text-sm px-5 py-2 rounded-full transition-all duration-200"
            style={{
              background: scrolled ? "#f5a800" : "#f5a800",
              color: "#0f2044",
              fontWeight: 600,
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-1 transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/97 backdrop-blur-xl border-b border-black/8 px-6 pb-6 pt-4">
          {/* Mobile logo */}
          <div className="mb-4 pb-4 border-b border-black/8">
            <img
              src={fullLogo}
              alt="ConvertX Lead Generation"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-sm border-b border-black/6 last:border-0 ${
                  location.pathname === link.path
                    ? "text-black font-medium"
                    : "text-black/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="mt-4 text-sm px-5 py-3 rounded-full text-center"
              style={{ background: "#f5a800", color: "#0f2044", fontWeight: 600 }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}