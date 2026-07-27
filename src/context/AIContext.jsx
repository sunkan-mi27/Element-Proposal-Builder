import { createContext, useContext, useMemo } from "react";

import { useProposal } from "./ProposalContext";
import { useBlocks } from "./BlocksContext";
import { useSections } from "./SectionContext";
import { useTemplate } from "./TemplateContext";

const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const { proposal } = useProposal();
  const { blocks } = useBlocks();
  const { sections } = useSections();
  const { template } = useTemplate();

  const document = useMemo(
    () => ({
      proposal,
      blocks,
      sections,
      template,
    }),
    [proposal, blocks, sections, template],
  );

  return (
    <AIContext.Provider value={{ document }}>{children}</AIContext.Provider>
  );
};

export const useAI = () => useContext(AIContext);
