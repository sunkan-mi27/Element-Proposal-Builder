import { useTemplate } from "../context/TemplateContext";
import "../styles/templateSelector.css";

const TemplateSelector = () => {
  const { template, setTemplate, templates } = useTemplate();

  return (
    <div className="template-selector">
      <label>Template</label>

      <select value={template} onChange={(e) => setTemplate(e.target.value)}>
        {Object.entries(templates).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemplateSelector;
