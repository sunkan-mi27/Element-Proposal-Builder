import { exportProposal } from "../utils/exportProposal";
import { importProposal } from "../utils/importProposal";
import { exportPDF } from "../utils/exportPDF";
import { exportHTML } from "../utils/exportHTML";
import { useProposal } from "../context/ProposalContext";
import { useTemplate } from "../context/TemplateContext";
import { useBlocks } from "../context/BlocksContext";
import { useSections } from "../context/SectionContext";
import { validateProposal } from "../utils/validateProposal";
import "../styles/exportCenter.css";

const ExportCenter = () => {
  const { proposal, setProposal } = useProposal();
  const { template, setTemplate } = useTemplate();
  const { blocks, setBlocks } = useBlocks();
  const { sections, setSections } = useSections();

  const handleImport = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    importProposal(file, setProposal, setTemplate, setBlocks, setSections);
  };

  const errors = validateProposal(proposal);
  const canExport = Object.keys(errors).length === 0;

  return (
    <div className="export-center">
      <h3>📤 Export Center</h3>

      <button disabled={!canExport} onClick={exportPDF}>
        📄 Export PDF
      </button>

      <button disabled={!canExport} onClick={exportHTML}>
        🌐 Export HTML
      </button>

      <button
        disabled={!canExport}
        onClick={() =>
          exportProposal({
            proposal,
            template,
            blocks,
            sections,
          })
        }
      >
        🧾 Export JSON
      </button>

      <label className="import-btn">
        📂 Import Proposal
        <input type="file" accept=".json" hidden onChange={handleImport} />
      </label>
    </div>
  );
};

export default ExportCenter;
