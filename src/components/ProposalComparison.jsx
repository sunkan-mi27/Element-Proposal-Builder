import "../styles/proposalComparison.css";
import { useAI } from "../context/AIContext";

const ProposalComparison = () => {
  const comparison = [
    {
      title: "Trust",
      yours: 94,
      average: 76,
    },
    {
      title: "Professionalism",
      yours: 97,
      average: 81,
    },
    {
      title: "Clarity",
      yours: 91,
      average: 72,
    },
    {
      title: "Pricing",
      yours: 82,
      average: 70,
    },
  ];

  const {
    document: { proposal },
  } = useAI();

  return (
    <div className="proposal-comparison">
      <h3>⚔️ Proposal Comparison</h3>

      {comparison.map((item) => (
        <div className="compare-card" key={item.title}>
          <div className="compare-header">
            <span>{item.title}</span>
            <strong>{item.yours}%</strong>
          </div>

          <div className="compare-bar">
            <div className="your-score" style={{ width: `${item.yours}%` }} />

            <div
              className="average-score"
              style={{ width: `${item.average}%` }}
            />
          </div>

          <small>Your Proposal vs Average Proposal</small>
        </div>
      ))}
    </div>
  );
};

export default ProposalComparison;
