import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { faqs } from "../data/faq.js";
import "./Faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="FAQ" className="faq-section">
      <div className="container">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" />

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-question">{item.q}</span>
                  <span className="faq-icon">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </button>

                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}