import SectionHeader from "../components/SectionHeader.jsx";
import { overviewCards } from "../data/overview.js";
import "./Overview.css";

export default function Overview() {
  return (
    <section className="overview-section">
      <div className="container">
        <SectionHeader
          label="Overview"
          title="All-in-One HR Solution for Growing Businesses"
        />

        <div className="row g-4 justify-content-center">
          {overviewCards.map((card) => (
            <div className="col-md-6 col-lg-3" key={card.title}>
              <div className="feature-card h-100">
                <div className="feature-card-img">
                  <img src={card.img} alt={card.title} />
                </div>
                <h5 className="feature-card-title">{card.title}</h5>
                <p className="feature-card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}