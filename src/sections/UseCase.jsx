import SectionHeader from "../components/SectionHeader.jsx";
import { useCases } from "../data/useCases.js";
import "./UseCase.css";

export default function UseCase() {
  return (
    <section className="use-case-section">
      <div className="container">
        <SectionHeader label="Use Case" title="Designed for HR Professionals" />

        <div className="row g-4 justify-content-center text-center">
          {useCases.map((item) => (
            <div className="col-md-4" key={item.title}>
              <div className="use-case-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h5 className="use-case-title">{item.title}</h5>
              <p className="use-case-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center gap-3 mt-5">
          <a href="#" className="btn btn-live-demo">
            <i className="bi bi-play me-2"></i>Live Demo
          </a>
          <a href="#" className="btn btn-buy-product">
            <i className="bi bi-cart3 me-2"></i>Buy Full Product
          </a>
        </div>
      </div>
    </section>
  );
}