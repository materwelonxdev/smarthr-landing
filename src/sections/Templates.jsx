import SectionHeader from "../components/SectionHeader.jsx";
import { templateCards } from "../data/templates.js";
import "./Templates.css";

const REACT_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

export default function Templates() {
  return (
    <section id="Templates" className="templates-section">
      <div className="container">
        <SectionHeader
          light
          label="Our Templates"
          title={
            <>
              <span className="text-orange">Explore</span> Our Templates
            </>
          }
          subtitle="Choose the right template for HR management and field service operations"
        />

        <div className="row g-4 justify-content-center">
          {templateCards.map((card) => (
            <div className="col-lg-6" key={card.title}>
              <div className="template-card h-100">
                <div className="template-card-img">
                  <img src={card.img} alt={card.title} />
                </div>

                <div className="template-card-body text-center">
                  <h4 className="template-card-title">
                    {card.title}
                    {card.isNew && <span className="badge-new">NEW</span>}
                  </h4>
                  <p className="template-card-desc">{card.desc}</p>

                  <div className="d-flex justify-content-center gap-2">
                    <span className="tech-badge">
                      <img src={REACT_ICON} alt="React" width="20" />
                      React
                    </span>
                    <span className="tech-badge">
                      <span className="tech-next">N</span>
                      Nextjs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}