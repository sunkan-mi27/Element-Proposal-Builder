import "../styles/toolbar.css";

const BuilderToolbar = () => {
  return (
    <header className="toolbar">
      <div className="toolbar-left">
        <div className="workspace-icon">📄</div>

        <div>
          <h2>Proposal Builder Workspace</h2>

          <p>Last saved just now ✓</p>
        </div>
      </div>

      <div className="toolbar-right">
        <button className="toolbar-btn">📄 Document</button>

        <button className="toolbar-btn">✉️ Email</button>

        <button className="toolbar-btn">💾 Save Draft</button>

        <button className="export-btn">Export →</button>
      </div>
    </header>
  );
};

export default BuilderToolbar;
