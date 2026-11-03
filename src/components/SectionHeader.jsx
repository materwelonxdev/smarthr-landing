import "./SectionHeader.css";

export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className={`section-header text-center ${light ? "light" : ""}`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}