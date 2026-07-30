import { useTemplate } from "../context/TemplateContext";
import "../styles/templateSelector.css";

const TemplateSelector = () => {
  const { template, setTemplate, templates } = useTemplate();

  return (
    <div className="template-selector">
      <h3>
        🎨 Proposal Templates
        <small>{Object.keys(templates).length} Available</small>
      </h3>

      <div className="template-grid">
        {Object.entries(templates).map(([key, name]) => (
          <div
            key={key}
            className={`template-card ${template === key ? "active" : ""}`}
            onClick={() => setTemplate(key)}
          >
            <div className="template-preview">
              <span>
                {key === "agency" && "🏢"}
                {key === "modern" && "✨"}
                {key === "minimal" && "📄"}
                {key === "premium" && "👑"}
              </span>
            </div>

            <h4>{name}</h4>

            <p>
              {key === "agency" &&
                "Perfect for agencies, freelancers and creative builders."}

              {key === "modern" &&
                "Clean modern proposal with a balanced layout."}

              {key === "minimal" &&
                "Simple distraction-free document focused on content."}

              {key === "premium" &&
                "Luxury proposal with rich presentation and polished styling."}
            </p>

            <button>{template === key ? "✓ Selected" : "Use Template"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
