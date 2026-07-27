import { useProposal } from "../context/ProposalContext";
import { useInspector } from "../context/InspectorContext";
import "../styles/propertyInspector.css";

const PropertyInspector = () => {
  const { proposal, updateProposal } = useProposal;
  const { selected } = useInspector();

  if (!selected)
    return (
      <div className="property-inspector">
        <h3>Inspector</h3>
        <p>Select an element.</p>
      </div>
    );

  return (
    <div className="property-inspector">
      <h3>Property Inspector</h3>

      <label>Project Name</label>

      <input
        type="text"
        value={proposal.projectName || ""}
        onChange={(e) => updateProposal("projectName", e.target.value)}
      />

      <label>Client Name</label>

      <input
        type="text"
        value={proposal.clientName || ""}
        onChange={(e) => updateProposal("clientName", e.target.value)}
      />

      <label>Company Name</label>

      <input
        type="text"
        value={proposal.companyName || ""}
        onChange={(e) => updateProposal("companyName", e.target.value)}
      />

      <label>Timeline</label>

      <input
        type="text"
        value={proposal.timeline || ""}
        onChange={(e) => updateProposal("timeline", e.target.value)}
      />

      <label>Budget</label>

      <input
        type="text"
        value={proposal.budget || ""}
        onChange={(e) => updateProposal("budget", e.target.value)}
      />
    </div>
  );
};

export default PropertyInspector;
