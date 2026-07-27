import { useProposal } from "../context/ProposalContext";
import "../styles/clientReaction.css";

const ClientReaction = () => {
  const { proposal } = useProposal();

  let confidence = 40;

  if (proposal.description.length > 80) confidence += 10;
  if (proposal.timeline) confidence += 10;
  if (proposal.budget) confidence += 10;
  if (proposal.deliverables) confidence += 10;
  if (proposal.paymentTerms) confidence += 10;
  if (proposal.projectDuration) confidence += 5;
  if (proposal.clientName) confidence += 5;

  confidence = Math.min(confidence, 100);

  const concerns = [];

  if (!proposal.timeline)
    concerns.push("Client may ask about the delivery timeline.");

  if (!proposal.paymentTerms) concerns.push("Payment terms are missing.");

  if (!proposal.deliverables)
    concerns.push("Deliverables aren't clearly defined.");

  if (!proposal.budget) concerns.push("Pricing information is missing.");

  return (
    <div className="client-reaction">
      <h3>🧠 Client Reaction Simulator</h3>

      <div className="reaction-score">
        <h1>{confidence}%</h1>
        <p>Estimated Client Confidence</p>
      </div>

      <div className="reaction-box">
        <h4>😊 Client Likes</h4>

        <ul>
          <li>✔ Professional proposal structure</li>
          <li>✔ Clear presentation</li>
          <li>✔ Easy to understand</li>
        </ul>
      </div>

      <div className="reaction-box">
        <h4>🤔 Possible Questions</h4>

        <ul>
          {concerns.length ? (
            concerns.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No major concerns detected.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ClientReaction;
