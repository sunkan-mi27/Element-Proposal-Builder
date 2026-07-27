import { createContext, useContext, useState } from "react";

const InspectorContext = createContext();

export const InspectorProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);

  return (
    <InspectorContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </InspectorContext.Provider>
  );
};

export const useInspector = () => useContext(InspectorContext);
