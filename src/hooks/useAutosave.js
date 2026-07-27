import { useEffect } from "react";
import { useHistory } from "../context/HistoryContext";
import { useProposal } from "../context/ProposalContext";
import { useTemplate } from "../context/TemplateContext";
import { useBlocks } from "../context/BlocksContext";
import { useSections } from "../context/SectionContext";

const useAutosave = () => {
  const { proposal } = useProposal();
  const { template } = useTemplate();
  const { blocks } = useBlocks();
  const { sections } = useSections();
  const { saveVersion } = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      saveVersion({
        proposal,
        template,
        blocks,
        sections,
      });
    }, 30000);

    return () => clearTimeout(timer);
  }, [proposal, template, blocks, sections]);
};

export default useAutosave;
