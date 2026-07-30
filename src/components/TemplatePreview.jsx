import { useTemplate } from "../context/TemplateContext";
import DocumentRenderer from "../elements/DocumentRenderer";

const TemplatePreview = ({ template }) => {
  const { setTemplate } = useTemplate();

  // Update the selected template whenever this preview renders
  React.useEffect(() => {
    setTemplate(template);
  }, [template, setTemplate]);

  return (
    <div className="preview-document">
      <DocumentRenderer />
    </div>
  );
};

export default TemplatePreview;
