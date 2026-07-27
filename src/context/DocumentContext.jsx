import { createContext, useContext, useState } from "react";

const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [documentData, setDocumentData] = useState(null);

  return (
    <DocumentContext.Provider
      value={{
        documentData,
        setDocumentData,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => useContext(DocumentContext);
