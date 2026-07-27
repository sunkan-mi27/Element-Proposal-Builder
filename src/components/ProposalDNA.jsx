import { useAI } from "../context/AIContext";
import "../styles/proposalDNA.css";

const ProposalDNA = () => {
  const {
    document: { proposal },
  } = useAI();

  const traits = [
    {
      name: "Professional",
      value: proposal.description.length > 80 ? 95 : 65,
    },
    {
      name: "Persuasive",
      value: proposal.deliverables ? 90 : 55,
    },
    {
      name: "Trustworthy",
      value: proposal.paymentTerms ? 92 : 60,
    },
    {
      name: "Clear",
      value: proposal.timeline ? 94 : 58,
    },
    {
      name: "Executive",
      value: proposal.budget ? 89 : 62,
    },
  ];

  return (
    <div className="proposal-dna">
      <h3>🧬 Proposal DNA</h3>

      {traits.map((trait) => (
        <div className="dna-item" key={trait.name}>
          <div className="dna-header">
            <span>{trait.name}</span>
            <strong>{trait.value}%</strong>
          </div>

          <div className="dna-bar">
            <div className="dna-fill" style={{ width: `${trait.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProposalDNA;
