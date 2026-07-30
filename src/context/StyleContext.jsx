import { createContext, useContext, useState } from "react";

const StyleContext = createContext();

const defaultStyles = {
  Heading: {
    color: "#0f172a",
    fontSize: 30,
    fontFamily: "inherit",
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 1.5,
    letterSpacing: 0,
  },

  Paragraph: {
    color: "#475569",
    fontSize: 16,
    fontFamily: "inherit",
    fontWeight: "400",
    textAlign: "left",
    lineHeight: 1.8,
    letterSpacing: 0,
  },

  Image: {
    width: "100%",
    borderRadius: 12,
    opacity: 1,
    boxShadow: "none",
  },

  Signature: {
    width: 180,
  },
};

export const StyleProvider = ({ children }) => {
  const [styles, setStyles] = useState(defaultStyles);

  const updateStyle = (type, property, value) => {
    setStyles((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [property]: value,
      },
    }));
  };

  return (
    <StyleContext.Provider
      value={{
        styles,
        updateStyle,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export const useStyles = () => useContext(StyleContext);
