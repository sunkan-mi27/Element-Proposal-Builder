import { createContext, useContext, useState } from "react";

const BlocksContext = createContext();

export const BlocksProvider = ({ children }) => {
  const [blocks, setBlocks] = useState({
    summary: true,
    scope: true,
    timeline: true,
    investment: true,
    payment: true,
    testimonials: true,
    faq: true,
    about: true,
    nextSteps: true,
    signature: true,
  });

  const toggleBlock = (block) => {
    setBlocks((prev) => ({
      ...prev,
      [block]: !prev[block],
    }));
  };

  return (
    <BlocksContext.Provider
      value={{
        blocks,
        setBlocks,
        toggleBlock,
      }}
    >
      {children}
    </BlocksContext.Provider>
  );
};

export const useBlocks = () => useContext(BlocksContext);
