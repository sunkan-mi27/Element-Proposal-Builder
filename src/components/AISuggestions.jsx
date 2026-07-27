import { useAI } from "../context/AIContext";
import "../styles/aiSuggestions.css";

const AISuggestions = () => {
  const {
    document: { proposal },
  } = useAI();

  const suggestions = [];

  if (proposal.description.trim().length < 50) {
    suggestions.push(
      "💡 Expand your project description to build client confidence.",
    );
  }

  if (!proposal.paymentTerms.trim()) {
    suggestions.push("💳 Add payment terms to avoid misunderstandings.");
  }

  if (!proposal.deliverables.trim()) {
    suggestions.push("📦 Clearly define what the client will receive.");
  }

  if (!proposal.timeline.trim()) {
    suggestions.push("📅 Add a realistic timeline.");
  }

  if (!proposal.budget.trim()) {
    suggestions.push("💰 Include your pricing.");
  }

  return (
    <div className="ai-suggestions">
      <h3>AI Proposal Coach</h3>

      {suggestions.length === 0 ? (
        <div className="success">
          🎉 Excellent! Your proposal looks ready to send.
        </div>
      ) : (
        suggestions.map((item, index) => (
          <div className="suggestion" key={index}>
            <p>{item}</p>

            <button className="fix-btn">Generate</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AISuggestions;
