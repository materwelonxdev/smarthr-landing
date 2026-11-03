import { useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import { innerPageTabs } from "../data/innerPages.js";
import "./InnerPages.css";

export default function InnerPages() {
  const [activeKey, setActiveKey] = useState(innerPageTabs[0].key);
  const activeTab = innerPageTabs.find((tab) => tab.key === activeKey);

  return (
    <section id="InnerPages" className="inner-pages-section">
      <div className="container">
        <SectionHeader
          label="Inner Pages"
          title="Prebuilt Pages to Accelerate your Workflow"
        />

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {innerPageTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`page-filter-btn ${activeKey === tab.key ? "active" : ""}`}
              onClick={() => setActiveKey(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="row g-4" key={activeKey}>
          {activeTab.pages.map((page) => (
            <div className="col-md-6 col-lg-4 inner-page-col" key={page.title}>
              <div className="inner-page-card">
                <div className="inner-page-card-header">
                  <h5 className="inner-page-card-title">{page.title}</h5>
                  <i className="bi bi-arrow-right card-arrow"></i>
                </div>
                <div className="inner-page-img">
                  <img src={page.img} alt={page.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}