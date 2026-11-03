import { useEffect, useRef, useState } from "react";
import { counters } from "../data/counters.js";
import "./Counters.css";

function CountUp({ end }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1500;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * end));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return <span ref={ref}>{value}</span>;
}

export default function Counters() {
  return (
    <section className="counters-section">
      <div className="counters-glow" aria-hidden="true"></div>

      <div className="container position-relative">
        <div className="row g-4">
          {counters.map((item) => (
            <div className="col-sm-6 col-lg-3" key={item.label}>
              <div className="counter-item text-center">
                <h3 className="counter-number">
                  <CountUp end={item.value} />+
                </h3>
                <p className="counter-label">
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}