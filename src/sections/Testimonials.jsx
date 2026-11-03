import SectionHeader from "../components/SectionHeader.jsx";
import { testimonials } from "../data/testimonials.js";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <i className="bi bi-quote testimonial-quote" aria-hidden="true"></i>
      <div className="testimonial-stripes" aria-hidden="true"></div>

      <div className="container position-relative">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Are Saying"
        />

        <div className="testimonial-track">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <i className="bi bi-star-fill" key={i}></i>
                ))}
              </div>
              <p className="testimonial-text">{item.text}</p>
              <h6 className="testimonial-author">{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}