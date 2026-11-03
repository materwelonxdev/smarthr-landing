import SectionHeader from "../components/SectionHeader.jsx";
import { benefits } from "../data/benefits.js";
import "./Benefits.css";

export default function Benefits() {
  return (
    <section id="features" className="benefits-section">
      <div className="container">
        <SectionHeader
          label="Key Benefits"
          title="Why Choose Our HR Admin Template?"
        />

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            {benefits.map((item, index) => (
              <div className="benefit-item" key={item.title}>
                <div className="benefit-head">
                  <span className="benefit-number">{index + 1}</span>
                  <h5 className="benefit-title">{item.title}</h5>
                </div>
                <p className="benefit-text">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            <div className="benefits-panel">
              <div className="benefits-stripes" aria-hidden="true"></div>

              <img
                src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/key-sec-img-01.svg"
                alt="Task statistics"
                className="benefit-card-tasks"
              />
              <img
                src="https://smarthr.dreamstechnologies.com/react/assets/img/bg/key-sec-img-02.png"
                alt="Candidate details"
                className="benefit-card-candidate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}