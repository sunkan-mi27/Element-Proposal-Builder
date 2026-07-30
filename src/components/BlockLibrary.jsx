import { useBlocks } from "../context/BlocksContext";
import "../styles/blockLibrary.css";

const library = [
  { key: "summary", title: "📝 Executive Summary" },
  { key: "scope", title: "📋 Scope of Work" },
  { key: "timeline", title: "📅 Timeline" },
  { key: "investment", title: "💰 Investment" },
  { key: "payment", title: "💳 Payment Terms" },
  { key: "testimonials", title: "⭐ Testimonials" },
  { key: "faq", title: "❓ FAQ" },
  { key: "about", title: "🏢 Why Choose Us" },
  { key: "nextSteps", title: "🚀 Next Steps" },
  { key: "signature", title: "✍️ Client Acceptance" },
];

const BlockLibrary = () => {
  const { blocks, toggleBlock } = useBlocks();

  return (
    <div className="block-library">
      <div className="library-header">
        <h3>📚 Block Library</h3>
        <small>Toggle proposal sections</small>
      </div>

      {library.map((block) => (
        <button
          key={block.key}
          className={blocks[block.key] ? "active" : ""}
          onClick={() => toggleBlock(block.key)}
        >
          <div className="library-item">
            <span>{block.title}</span>

            <span className="library-status">
              {blocks[block.key] ? "✅" : "⭕"}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default BlockLibrary;
