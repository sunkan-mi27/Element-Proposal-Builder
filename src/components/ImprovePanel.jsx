import { useProposal } from "../context/ProposalContext";
import { improveProposal } from "../utils/improveProposal";

const ImprovePanel = () => {
  const { setProposal } = useProposal();

  const improveSummary = () => {
    setProposal((prev) => ({
      ...prev,
      description: improveProposal(prev.description),
    }));
  };

  const improveScope = () => {
    setProposal((prev) => ({
      ...prev,
      deliverables: improveProposal(prev.deliverables),
    }));
  };

  return (
    <div>
      <h3>Improve Proposal</h3>

      <button onClick={improveSummary}>Improve Executive Summary</button>

      <button onClick={improveScope}>Improve Scope of Work</button>
    </div>
  );
};

export default ImprovePanel;
