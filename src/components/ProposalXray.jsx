import { useState } from "react";
import "../styles/proposalXray.css";
import { useAI } from "../context/AIContext";

const sections = [
  {
    title: "🟢 Trust Score",
    score: "95%",
    insight: "Your proposal builds strong trust with the client.",
  },
  {
    title: "🟡 Pricing",
    score: "78%",
    insight: "Explain the value before showing the price.",
  },
  {
    title: "🔴 Timeline",
    score: "62%",
    insight: "Break the timeline into weekly milestones.",
  },
  {
    title: "🟢 Call To Action",
    score: "96%",
    insight: "Strong closing statement that encourages action.",
  },
];

const ProposalXray = () => {
  const [selected, setSelected] = useState(sections[0]);
  const {
    document: { proposal },
  } = useAI();

  return (
    <div className="proposal-xray">
      <div className="xray-header">
        <h3>🔍 Proposal X-Ray</h3>
        <span>A+</span>
      </div>

      <div className="scan-line"></div>

      <div className="xray-list">
        {sections.map((item) => (
          <div
            key={item.title}
            className="xray-card"
            onClick={() => setSelected(item)}
          >
            <h4>{item.title}</h4>
            <strong>{item.score}</strong>
          </div>
        ))}
      </div>

      <div className="xray-insight">
        <h4>AI Insight</h4>
        <p>{selected.insight}</p>

        <button>Apply Suggestion</button>
      </div>
    </div>
  );
};

export default ProposalXray;
