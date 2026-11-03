import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { demos } from "../data/demos.js";
import "./Demos.css";

export default function Demos() {
  const [active, setActive] = useState(0);

  return (
    <section id="Demos" className="demos-section">
      <div className="container">
        <SectionHeader light label="Demos" title="See the Template in Action" />

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {demos.map((demo, index) => (
            <button
              key={demo.label}
              type="button"
              className={`demo-btn ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {demo.label}
            </button>
          ))}
        </div>

        <div className="demo-frame">
          <div className="demo-frame-inner">
            <img
              key={active}
              src={demos[active].img}
              alt={demos[active].label}
              className="demo-image"
            />
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn btn-buy-product">
            <i className="bi bi-cart3 me-2"></i>Buy Template
          </a>
        </div>
      </div>
    </section>
  );
}