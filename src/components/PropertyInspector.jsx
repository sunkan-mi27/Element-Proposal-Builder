import { useProposal } from "../context/ProposalContext";
import { useInspector } from "../context/InspectorContext";

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
    </div>
  );
};

export default PropertyInspector;
