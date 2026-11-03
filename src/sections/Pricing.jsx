import SectionHeader from "../components/SectionHeader.jsx";
import { plans } from "../data/pricing.js";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-diamond" aria-hidden="true"></div>
      <div className="pricing-dots" aria-hidden="true"></div>

      <div className="container">
        <SectionHeader
          light
          label="Pricing"
          title="Flexible Pricing Plans for Every Need"
        />

        <div className="row justify-content-center g-4">
          {plans.map((plan) => (
            <div className="col-lg-5 col-md-6" key={plan.name}>
              <div className="pricing-card">
                {plan.recommended && (
                  <span className="pricing-badge">Recommended</span>
                )}

                <div className="text-center">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">{plan.price}</div>
                  <p className="plan-desc">{plan.desc}</p>
                </div>

                <hr className="pricing-divider" />

                <ul className="pricing-features list-unstyled">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`feature-item ${feature.included ? "on" : "off"}`}
                    >
                      <i
                        className={`bi ${
                          feature.included ? "bi-check-circle" : "bi-x-circle"
                        }`}
                      ></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="btn pricing-btn w-100">
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}