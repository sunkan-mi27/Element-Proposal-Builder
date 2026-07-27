import { useHistory } from "../context/HistoryContext";
import { useProposal } from "../context/ProposalContext";
import { useTemplate } from "../context/TemplateContext";
import { useBlocks } from "../context/BlocksContext";
import { useSections } from "../context/SectionContext";

const SaveVersionButton = () => {
  const { proposal } = useProposal();
  const { template } = useTemplate();
  const { blocks } = useBlocks();
  const { sections } = useSections();

  const { saveVersion } = useHistory();

  const handleSave = () => {
    saveVersion({
      proposal,
      template,
      blocks,
      sections,
    });
  };

  return <button onClick={handleSave}>💾 Save Version</button>;
};

export default SaveVersionButton;
