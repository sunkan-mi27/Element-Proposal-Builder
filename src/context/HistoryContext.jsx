import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const saveVersion = ({ proposal, template, blocks, sections }) => {
    const version = {
      id: crypto.randomUUID(),
      name: `Version ${history.length + 1}`,
      createdAt: new Date().toLocaleString(),
      proposal: structuredClone(proposal),
      template,
      blocks: structuredClone(blocks),
      sections: structuredClone(sections),
    };

    setHistory((prev) => [version, ...prev]);
  };

  const restoreVersion = (
    id,
    setProposal,
    setTemplate,
    setBlocks,
    setSections,
  ) => {
    const version = history.find((item) => item.id === id);

    if (!version) return;

    setProposal(version.proposal);
    setTemplate(version.template);
    setBlocks(version.blocks);
    setSections(version.sections);
  };

  const renameVersion = (id) => {
    const newName = prompt("Version name");

    if (!newName) return;

    setHistory((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newName } : item)),
    );
  };

  const deleteVersion = (id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        saveVersion,
        restoreVersion,
        renameVersion,
        deleteVersion,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
