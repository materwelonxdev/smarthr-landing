import { marqueeItems } from "../data/marquee.js";
import "./Marquee.css";

function MarqueeSet({ hidden = false }) {
  return (
    <div className="marquee-content" aria-hidden={hidden}>
      {marqueeItems.map((text) => (
        <span className="marquee-item" key={text}>
          <i className="bi bi-people"></i>
          {text}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-ribbon-orange" aria-hidden="true"></div>

      <div className="marquee-ribbon-dark">
        <div className="marquee-track">
          <MarqueeSet />
          <MarqueeSet hidden />
        </div>
      </div>
    </section>
  );
}