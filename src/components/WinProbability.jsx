import { useAI } from "../context/AIContext";
import "../styles/winProbability.css";

const WinProbability = () => {
  const {
    document: { proposal },
  } = useAI();

  let score = 45;

  if (proposal.clientName) score += 8;
  if (proposal.projectName) score += 8;
  if (proposal.description?.length > 100) score += 10;
  if (proposal.deliverables) score += 8;
  if (proposal.timeline) score += 7;
  if (proposal.budget) score += 7;
  if (proposal.paymentTerms) score += 7;

  score = Math.min(score, 100);

  let status = "Needs Work";

  if (score >= 90) status = "Excellent";
  else if (score >= 75) status = "Very Strong";
  else if (score >= 60) status = "Promising";

  return (
    <div className="win-probability">
      <h3>🎯 Win Probability</h3>

      <div className="circle">
        <h1>{score}%</h1>
      </div>

      <h4>{status}</h4>

      <div className="chance-bar">
        <div className="chance-fill" style={{ width: `${score}%` }} />
      </div>

      <button className="improve-btn">Improve Proposal</button>
    </div>
  );
};

export default WinProbability;
