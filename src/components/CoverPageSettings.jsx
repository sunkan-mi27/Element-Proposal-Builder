import ImageUploader from "./ImageUploader";
import { useProposal } from "../context/ProposalContext";

const CoverPageSettings = () => {
  const { proposal, setProposal } = useProposal();

  return (
    <div className="cover-page-settings">
      <h3>Cover Page</h3>

      <input
        type="text"
        placeholder="Cover Title"
        value={proposal.coverTitle}
        onChange={(e) =>
          setProposal((prev) => ({
            ...prev,
            coverTitle: e.target.value,
          }))
        }
      />

      <input
        type="text"
        placeholder="Cover Subtitle"
        value={proposal.coverSubtitle}
        onChange={(e) =>
          setProposal((prev) => ({
            ...prev,
            coverSubtitle: e.target.value,
          }))
        }
      />

      <ImageUploader
        label="Cover Background"
        value={proposal.coverBackground}
        onChange={(value) =>
          setProposal((prev) => ({
            ...prev,
            coverBackground: value,
          }))
        }
      />
    </div>
  );
};

export default CoverPageSettings;
