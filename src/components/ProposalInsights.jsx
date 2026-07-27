import { useAI } from "../context/AIContext";
import "../styles/proposalInsights.css";

const ProposalInsights = () => {
  const {
    document: { proposal },
  } = useAI();

  const insights = [];

  if (proposal.description.length < 100) {
    insights.push({
      type: "warning",
      title: "Expand your introduction",
      message: "A stronger introduction increases client confidence.",
    });
  }

  if (!proposal.deliverables) {
    insights.push({
      type: "error",
      title: "Missing deliverables",
      message: "Clients want to know exactly what they'll receive.",
    });
  }

  if (!proposal.paymentTerms) {
    insights.push({
      type: "error",
      title: "Payment terms missing",
      message: "Clearly define payment milestones.",
    });
  }

  if (proposal.timeline) {
    insights.push({
      type: "success",
      title: "Timeline added",
      message: "A clear schedule builds trust.",
    });
  }

  if (proposal.budget) {
    insights.push({
      type: "success",
      title: "Budget included",
      message: "Clients appreciate transparent pricing.",
    });
  }

  return (
    <div className="proposal-insights">
      <h3>🧠 AI Insights</h3>

      {insights.map((item, index) => (
        <div className={`insight-card ${item.type}`} key={index}>
          <h4>{item.title}</h4>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ProposalInsights;
