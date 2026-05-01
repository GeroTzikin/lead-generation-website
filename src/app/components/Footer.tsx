import { Link } from "react-router";
import fullLogo from "../../imports/convertx-full-highres-better-1.png";

const services = [
  { label: "Personal Loan", path: "/personal-loan" },
  { label: "Car Warranty", path: "/car-warranty" },
  { label: "Mortgage", path: "/mortgage" },
  { label: "Home Warranty", path: "/home-warranty" },
];

const company = [
  { label: "About Us", path: "/" },
  { label: "How It Works", path: "/" },
  { label: "Testimonials", path: "/" },
  { label: "Contact", path: "/" },
];

const legal = [
  { label: "Privacy Policy", path: "/" },
  { label: "Terms of Service", path: "/" },
  { label: "Cookie Policy", path: "/" },
];

export function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-5">
              <img
                src={fullLogo}
                alt="ConvertX Lead Generation"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-black/50">
              Connecting people with the financial solutions they need. Simple, transparent, and fast.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm mb-4 text-black" style={{ fontWeight: 600 }}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-black/50 hover:text-black transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm mb-4 text-black" style={{ fontWeight: 600 }}>
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-black/50 hover:text-black transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm mb-4 text-black" style={{ fontWeight: 600 }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-black/50 hover:text-black transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} ConvertX Lead Generation. All rights reserved.
          </p>
          <p className="text-xs text-black/40 text-center md:text-right max-w-md">
            ConvertX Lead Generation is a lead generation platform. We do not provide financial advice. All loan and warranty products are subject to lender/provider approval.
          </p>
        </div>
      </div>
    </footer>
  );
}