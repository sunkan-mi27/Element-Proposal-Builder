import { useBlocks } from "../context/BlocksContext";
import "../styles/blockLibrary.css";

const library = [
  { key: "summary", title: "📝 Executive Summary" },
  { key: "scope", title: "📋 Scope of Work" },
  { key: "timeline", title: "📅 Timeline" },
  { key: "investment", title: "💰 Investment" },
  { key: "payment", title: "💳 Payment Terms" },
  { key: "about", title: "🏢 Why Choose Us" },
  { key: "nextSteps", title: "🚀 Next Steps" },
];

const BlockLibrary = () => {
  const { blocks, toggleBlock } = useBlocks();

  return (
    <div className="block-library">
      <h3>📚 Block Library</h3>

      {library.map((block) => (
        <button
          key={block.key}
          className={blocks[block.key] ? "active" : ""}
          onClick={() => toggleBlock(block.key)}
        >
          {block.title}
        </button>
      ))}
    </div>
  );
};

export default BlockLibrary;
