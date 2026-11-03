import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#Home" },
  { label: "Demos", href: "#Demos" },
  { label: "Templates", href: "#Templates" },
  { label: "Inner Pages", href: "#InnerPages" },
  { label: "Features", href: "#react-features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg site-navbar-inner">
        <div className="container-fluid">
          <a href="#Home" className="navbar-brand logo">
            <i className="bi bi-broadcast-pin"></i> Smart<span>HR</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto align-items-lg-center">
              {links.map((link) => (
                <li className="nav-item" key={link.label}>
                  <a className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#" className="btn btn-dark-custom">
              <i className="bi bi-cart3 me-2"></i>Buy Template
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}