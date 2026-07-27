import { useTemplate } from "../context/TemplateContext";

import Agency from "../templates/Agency";
import Modern from "../templates/Modern";
import Premium from "../templates/Premium";
import Minimal from "../templates/Minimal";

import "../styles/documentRenderer.css";

const DocumentRenderer = () => {
  const { template } = useTemplate();

  switch (template) {
    case "agency":
      return <Agency />;

    case "modern":
      return <Modern />;

    case "premium":
      return <Premium />;

    case "minimal":
      return <Minimal />;

    default:
      return <Agency />;
  }
};

export default DocumentRenderer;
