import { useHistory } from "../context/HistoryContext";
import "../styles/versionHistory.css";

const VersionHistory = () => {
  const {
    history,
    restoreVersion,
    renameVersion,
    deleteVersion,
  } = useHistory();

  return (
    <div className="version-history">
      <h3>🕘 Version History</h3>

      {history.length === 0 ? (
        <p className="empty-history">
          No saved versions yet.
        </p>
      ) : (
        history.map((version) => (
          <div
            className="history-card"
            key={version.id}
          >
            <div>
              <h4>{version.name}</h4>
              <small>{version.createdAt}</small>
            </div>

            <div className="history-actions">
              <button
                onClick={() =>
                  restoreVersion(version.id)
                }
              >
                Restore
              </button>

              <button
                onClick={() =>
                  renameVersion(version.id)
                }
              >
                Rename
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteVersion(version.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default VersionHistory;