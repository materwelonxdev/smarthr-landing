import "./Hero.css";

const REACT_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

export default function Hero() {
  return (
    <section id="Home" className="hero-section text-center">
      <div className="container">
        <h1 className="hero-title">
          Professional HR Management Template with{" "}
          <span className="highlight-cyan">React &amp; Bootstrap</span>
        </h1>

        <p className="hero-subtitle">
          A complete HR solution designed to enhance your recruitment process
          with ease.
        </p>

        <div className="hero-buttons d-flex justify-content-center gap-3">
          <a href="#" className="btn btn-light hero-btn">
            <img src={REACT_ICON} alt="React" width="22" />
            React
          </a>
          <a href="#" className="btn btn-light hero-btn">
            <span className="next-icon">N</span>
            Nextjs
          </a>
        </div>

        <div className="hero-image-wrapper">
          <div className="dashboard-holder">
            <div className="dashboard-pill pill-left" aria-hidden="true">
              <div className="pill-inner"></div>
            </div>
            <div className="dashboard-pill pill-right" aria-hidden="true">
              <div className="pill-inner"></div>
            </div>

            <img
              src="\img\dashboard-01.webp"
              alt="Admin Dashboard Preview"
              className="dashboard-mockup"
            />

            <div className="floating-react-icon">
              <img src={REACT_ICON} alt="React Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}