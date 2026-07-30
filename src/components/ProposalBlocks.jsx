import { useBlocks } from "../context/BlocksContext";
import "../styles/proposalBlocks.css";

const blockList = [
  { key: "summary", label: "Executive Summary" },
  { key: "scope", label: "Scope of Work" },
  { key: "timeline", label: "Timeline" },
  { key: "investment", label: "Investment" },
  { key: "payment", label: "Payment Terms" },
  { key: "testimonials", label: "Testimonials" },
  { key: "faq", label: "FAQ" },
  { key: "about", label: "About Us" },
  { key: "nextSteps", label: "Next Steps" },
  { key: "signature", label: "Client Acceptance" },
];

const ProposalBlocks = () => {
  const { blocks, toggleBlock } = useBlocks();

  return (
    <div className="proposal-blocks">
      <h3>🧩 Proposal Blocks</h3>

      {blockList.map((item) => (
        <label className="block-item" key={item.key}>
          <input
            type="checkbox"
            checked={blocks[item.key]}
            onChange={() => toggleBlock(item.key)}
          />

          <span>{item.label}</span>
        </label>
      ))}
    </div>
  );
};

export default ProposalBlocks;
