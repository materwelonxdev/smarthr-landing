import SectionHeader from "../components/SectionHeader.jsx";
import { layouts } from "../data/layouts.js";
import "./Layouts.css";

export default function Layouts() {
  return (
    <section id="layouts" className="layouts-section">
      <div className="container">
        <SectionHeader label="Layouts" title="Explore Versatile Layouts" />

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 g-lg-4">
          {layouts.map((layout) => (
            <div className="col" key={layout.name}>
              <div className="layout-card">
                <div className="layout-card-img">
                  <img src={layout.img} alt={`${layout.name} layout`} />
                </div>
                <div className="layout-card-name">{layout.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}