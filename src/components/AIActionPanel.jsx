import { useProposal } from "../context/ProposalContext";

const AIActionPanel = ({ title, summaryAction, scopeAction }) => {
  const { setProposal } = useProposal();

  const updateSummary = () => {
    setProposal((prev) => ({
      ...prev,
      description: summaryAction(prev.description),
    }));
  };

  const updateScope = () => {
    setProposal((prev) => ({
      ...prev,
      deliverables: scopeAction(prev.deliverables),
    }));
  };

  return (
    <div>
      <h3>{title}</h3>

      <button onClick={updateSummary}>Executive Summary</button>

      <button onClick={updateScope}>Scope of Work</button>
    </div>
  );
};

export default AIActionPanel;
