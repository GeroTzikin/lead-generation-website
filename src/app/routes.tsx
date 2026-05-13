import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { PersonalLoan } from "./pages/PersonalLoan";
import { CarWarranty } from "./pages/CarWarranty";
import { Mortgage } from "./pages/Mortgage";
import { HomeWarranty } from "./pages/HomeWarranty";
import { GetStarted } from "./pages/GetStarted";
import { TermsOfUse } from "./pages/TermsOfUse";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-black" style={{ fontSize: "80px", fontWeight: 700, letterSpacing: "-0.04em" }}>
          404
        </h1>
        <p className="text-black/40 mt-2 mb-8">Page not found</p>
        <a
          href="/"
          className="bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-black/80 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "get-started", Component: GetStarted },
      { path: "personal-loan", Component: PersonalLoan },
      { path: "car-warranty", Component: CarWarranty },
      { path: "mortgage", Component: Mortgage },
      { path: "home-warranty", Component: HomeWarranty },
      { path: "terms-of-use", Component: TermsOfUse },
      { path: "*", Component: NotFound },
    ],
  },
]);
