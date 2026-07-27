import { createContext, useContext, useState } from "react";

const SectionContext = createContext();

const defaultSections = [
  { id: "summary", title: "Executive Summary" },
  { id: "scope", title: "Scope of Work" },
  { id: "timeline", title: "Project Timeline" },
  { id: "investment", title: "Investment" },
  { id: "payment", title: "Payment Terms" },
  { id: "about", title: "Why Choose Us" },
  { id: "nextSteps", title: "Next Steps" },
  { id: "signature", title: "Client Acceptance" },
];

export const SectionProvider = ({ children }) => {
  const [sections, setSections] = useState(defaultSections);

  return (
    <SectionContext.Provider value={{ sections, setSections }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSections = () => useContext(SectionContext);
