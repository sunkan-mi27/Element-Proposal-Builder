import { useProposal } from "../context/ProposalContext";
import { shortenProposal } from "../utils/shortenProposal";

const ShortenPanel = () => {
  const { setProposal } = useProposal();

  const shortenSummary = () => {
    setProposal((prev) => ({
      ...prev,
      description: shortenProposal(prev.description),
    }));
  };

  const shortenScope = () => {
    setProposal((prev) => ({
      ...prev,
      deliverables: shortenProposal(prev.deliverables),
    }));
  };

  return (
    <div>
      <h3>Shorten Content</h3>

      <button onClick={shortenSummary}>Shorten Executive Summary</button>

      <button onClick={shortenScope}>Shorten Scope</button>
    </div>
  );
};

export default ShortenPanel;
