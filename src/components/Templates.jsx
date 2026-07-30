import { Link } from "react-router-dom";
import "../styles/templates.css";

const templates = [
  {
    id: "modern",
    name: "Modern",
    tag: "Corporate",
    description:
      "A clean and professional proposal for agencies, startups and freelancers.",
  },
  {
    id: "agency",
    name: "Agency",
    tag: "Creative",
    description:
      "Perfect for creative studios, marketing agencies and branding projects.",
  },
  {
    id: "premium",
    name: "Premium",
    tag: "Luxury",
    description:
      "Elegant layouts designed for high-value clients and enterprise proposals.",
  },
  {
    id: "minimal",
    name: "Minimal",
    tag: "Simple",
    description:
      "A distraction-free proposal focused on readability and clean presentation.",
  },
];

const Templates = () => {
  return (
    <div className="templates-page">
      <section className="templates-hero">
        <span className="templates-badge">✨ Premium Templates</span>

        <h1>Choose your proposal template</h1>

        <p>
          Every template is fully customizable. Switch designs anytime without
          losing your proposal content.
        </p>
      </section>

      <section className="templates-grid">
        {templates.map((template) => (
          <div className="template-card" key={template.id}>
            <div className="template-preview">
              <div className="preview-window">
                <div className="preview-header"></div>

                <div className="preview-line large"></div>
                <div className="preview-line"></div>
                <div className="preview-line short"></div>

                <div className="preview-box"></div>

                <div className="preview-line"></div>
                <div className="preview-line"></div>
              </div>
            </div>

            <div className="template-content">
              <span className="template-tag">{template.tag}</span>

              <h2>{template.name}</h2>

              <p>{template.description}</p>

              <div className="template-actions">
                <button className="preview-btn">Preview</button>

                <Link
                  to={`/builder?template=${template.id}`}
                  className="use-btn"
                >
                  Use Template →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="coming-soon">
        <h2>More templates coming soon</h2>

        <p>
          We're designing industry-specific proposal templates for real estate,
          software, consulting, construction and many more.
        </p>
      </section>
    </div>
  );
};

export default Templates;
