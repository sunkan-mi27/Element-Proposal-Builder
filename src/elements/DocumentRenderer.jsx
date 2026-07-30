import { useTemplate } from "../context/TemplateContext";

import Agency from "../templates/Agency";
import Modern from "../templates/Modern";
import Premium from "../templates/Premium";
import Minimal from "../templates/Minimal";

import "../styles/documentRenderer.css";

const DocumentRenderer = () => {
  const { template } = useTemplate();

  return (
    <div id="proposal-preview" className="document-renderer">
      {template === "agency" && <Agency />}
      {template === "modern" && <Modern />}
      {template === "premium" && <Premium />}
      {template === "minimal" && <Minimal />}
    </div>
  );
};

export default DocumentRenderer;
