import { useAI } from "../context/AIContext";
import "../styles/objectionPredictor.css";

const ObjectionPredictor = () => {
  const {
    document: { proposal },
  } = useAI();

  const objections = [];

  if (!proposal.budget) {
    objections.push({
      title: "Budget Not Specified",
      chance: "95%",
      reply: "Include pricing or a pricing range to reduce uncertainty.",
    });
  }

  if (!proposal.timeline) {
    objections.push({
      title: "When will this be completed?",
      chance: "90%",
      reply: "Break the project into milestones with estimated dates.",
    });
  }

  if (!proposal.paymentTerms) {
    objections.push({
      title: "How does payment work?",
      chance: "92%",
      reply: "Explain deposit, milestones and final payment clearly.",
    });
  }

  if (!proposal.deliverables) {
    objections.push({
      title: "What's included?",
      chance: "88%",
      reply: "List everything the client will receive.",
    });
  }

  if (objections.length === 0) {
    objections.push({
      title: "No major objections predicted",
      chance: "98%",
      reply: "Your proposal looks strong and ready to send.",
    });
  }

  return (
    <div className="objection-predictor">
      <h3>🛡️ Objection Predictor</h3>

      {objections.map((item, index) => (
        <div className="objection-card" key={index}>
          <div className="objection-top">
            <h4>{item.title}</h4>
            <span>{item.chance}</span>
          </div>

          <p>{item.reply}</p>

          <button>Generate Better Response</button>
        </div>
      ))}
    </div>
  );
};

export default ObjectionPredictor;
