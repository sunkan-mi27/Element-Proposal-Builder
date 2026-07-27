import { useAI } from "../context/AIContext";
import { analyzeProposal } from "../utils/analyzeProposal";

const ProposalHealth = () => {
  const {
    document: { proposal },
  } = useAI();

  const result = analyzeProposal(proposal);

  return (
    <div>
      <h3>Proposal Health</h3>

      <h1>{result.score}%</h1>

      {result.issues.length === 0 ? (
        <p>✅ Proposal looks healthy.</p>
      ) : (
        <ul>
          {result.issues.map((issue) => (
            <li key={issue}>{issue}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProposalHealth;
