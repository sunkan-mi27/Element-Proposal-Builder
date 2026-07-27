import { useAI } from "../context/AIContext";
import { useProposal } from "../context/ProposalContext";
import { rewriteProposal } from "../utils/rewriteProposal";

const RewritePanel = () => {
  const {
    document: { proposal },
  } = useAI();

  const { setProposal } = useProposal();

  const rewriteSummary = () => {
    setProposal((prev) => ({
      ...prev,
      description: rewriteProposal(prev.description),
    }));
  };

  const rewriteScope = () => {
    setProposal((prev) => ({
      ...prev,
      deliverables: rewriteProposal(prev.deliverables),
    }));
  };

  return (
    <div>
      <h3>Rewrite</h3>

      <button onClick={rewriteSummary}>Rewrite Executive Summary</button>

      <button onClick={rewriteScope}>Rewrite Scope of Work</button>

      <hr />

      <strong>Preview</strong>

      <p>{proposal.description}</p>
    </div>
  );
};

export default RewritePanel;
