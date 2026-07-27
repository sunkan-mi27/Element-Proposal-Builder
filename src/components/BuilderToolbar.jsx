import "../styles/toolbar.css";

const BuilderToolbar = () => {
  return (
    <header className="toolbar">
      <div className="toolbar-left">
        <div className="workspace-icon">📄</div>

        <div>
          <h2>Proposal Studio</h2>
          <p>Professional Proposal Builder</p>
        </div>
      </div>

      <div className="toolbar-right">
        <button className="toolbar-btn">
          💾 Save
        </button>

        <button className="toolbar-btn">
          👁 Preview
        </button>

        <button className="export-btn">
          📤 Export
        </button>
      </div>
    </header>
  );
};

export default BuilderToolbar;