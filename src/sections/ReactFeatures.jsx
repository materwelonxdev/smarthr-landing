import SectionHeader from "../components/SectionHeader.jsx";
import { features } from "../data/features.js";
import "./ReactFeatures.css";

export default function ReactFeatures() {
  return (
    <section id="react-features" className="react-features-section">
      <div className="container">
        <SectionHeader label="Features" title="React Features" />

        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-3 g-lg-4">
          {features.map((item) => (
            <div className="col" key={item.label}>
              <div className="feature-tech-card">
                <div className="feature-tech-icon">
                  {item.img ? (
                    <img src={item.img} alt={item.label} />
                  ) : (
                    <i className={`bi ${item.icon}`} style={{ color: item.color }}></i>
                  )}
                </div>
                <div className="feature-tech-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}