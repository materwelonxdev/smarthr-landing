import "./FooterCta.css";

const badges = [
  { icon: "bi-stack", color: "#f26522", label: "Elite Author" },
  { icon: "bi-lightning-charge-fill", color: "#3b9bd8", label: "Trendsetter" },
  { icon: "bi-award-fill", color: "#e5484d", label: "Author Level" },
];

export default function FooterCta() {
  return (
    <footer className="footer-cta-section text-center">
      <svg
        className="footer-react-watermark"
        width="270"
        height="270"
        viewBox="-115 -102 230 204"
        fill="none"
        aria-hidden="true"
      >
        <ellipse rx="95" ry="36" stroke="rgba(255,255,255,0.12)" strokeWidth="4.5" />
        <ellipse rx="95" ry="36" transform="rotate(60)" stroke="rgba(255,255,255,0.12)" strokeWidth="4.5" />
        <ellipse rx="95" ry="36" transform="rotate(120)" stroke="rgba(255,255,255,0.12)" strokeWidth="4.5" />
        <circle r="14" fill="rgba(255,255,255,0.12)" />
      </svg>

      <div className="container position-relative">
        <div className="footer-badges d-flex flex-wrap justify-content-center gap-4">
          {badges.map((badge) => (
            <span className="footer-badge" key={badge.label}>
              <span className="footer-badge-icon" style={{ background: badge.color }}>
                <i className={`bi ${badge.icon}`}></i>
              </span>
              {badge.label}
            </span>
          ))}
        </div>

        <h2 className="footer-title">
          Build your web App with
          <br />
          SmartHR React dashboard
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <a href="#" className="btn btn-cta-orange">
            <i className="bi bi-cart3 me-2"></i>Buy Template
          </a>
          <a href="#" className="btn btn-cta-teal">
            <i className="bi bi-cart3 me-2"></i>Buy Full Product
          </a>
        </div>

        <p className="footer-copyright">
          Copyright 2026 © <a href="#">SmartHR</a>
        </p>
      </div>
    </footer>
  );
}