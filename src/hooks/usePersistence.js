import { useEffect } from "react";
import { useProposal } from "../context/ProposalContext";
import { useTemplate } from "../context/TemplateContext";
import { useBlocks } from "../context/BlocksContext";
import { useSections } from "../context/SectionContext";

const STORAGE_KEY = "elements-proposal-builder";

const usePersistence = () => {
  const { proposal, setProposal } = useProposal();
  const { template, setTemplate } = useTemplate();
  const { blocks, setBlocks } = useBlocks();
  const { sections, setSections } = useSections();

  // Load
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    const data = JSON.parse(saved);

    if (data.proposal) setProposal(data.proposal);
    if (data.template) setTemplate(data.template);
    if (data.blocks) setBlocks(data.blocks);
    if (data.sections) setSections(data.sections);
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        proposal,
        template,
        blocks,
        sections,
      }),
    );
  }, [proposal, template, blocks, sections]);
};

export default usePersistence;
