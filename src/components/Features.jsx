import { Link } from "react-router-dom";
import "../styles/features.css";

const features = [
  {
    icon: "🤖",
    title: "AI Proposal Writer",
    description: "Generate proposals instantly with AI.",
  },
  {
    icon: "🧩",
    title: "Drag & Drop Builder",
    description: "Reorder proposal sections effortlessly.",
  },
  {
    icon: "🎨",
    title: "Property Inspector",
    description: "Edit fonts, colors and images visually.",
  },
  {
    icon: "📄",
    title: "Templates",
    description: "Professional proposal templates.",
  },
  {
    icon: "🧮",
    title: "Pricing Calculator",
    description: "Automatic totals, tax and discounts.",
  },
  {
    icon: "📤",
    title: "PDF Export",
    description: "Export beautiful proposals instantly.",
  },
  {
    icon: "🕒",
    title: "Version History",
    description: "Restore previous versions.",
  },
  {
    icon: "🏢",
    title: "Brand Kit",
    description: "Save your branding.",
  },
  {
    icon: "✍️",
    title: "Digital Signature",
    description: "Collect client signatures.",
  },
];
const Features = () => {
  return (
    <section className="features-page">
      <div className="features-hero">
        <h1>Everything You Need To Build Winning Proposals</h1>

        <p>
          Create, customise and deliver beautiful business proposals faster than
          ever before.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-cta">
        <h2>Ready to build your next proposal?</h2>

        <Link to="/builder" className="start-btn">
          Start Building
        </Link>
      </div>
    </section>
  );
};

export default Features;
