import { useProposal } from "../context/ProposalContext";
import { expandProposal } from "../utils/expandProposal";

const ExpandPanel = () => {
  const { setProposal } = useProposal();

  const expandSummary = () => {
    setProposal((prev) => ({
      ...prev,
      description: expandProposal(prev.description),
    }));
  };

  const expandScope = () => {
    setProposal((prev) => ({
      ...prev,
      deliverables: expandProposal(prev.deliverables),
    }));
  };

  return (
    <div>
      <h3>Expand Content</h3>

      <button onClick={expandSummary}>Expand Executive Summary</button>

      <button onClick={expandScope}>Expand Scope</button>
    </div>
  );
};

export default ExpandPanel;
