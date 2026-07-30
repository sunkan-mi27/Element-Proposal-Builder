import { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

const templates = {
  agency: "Agency",
  modern: "Modern",
  minimal: "Minimal",
  premium: "Premium",
};

export const TemplateProvider = ({ children }) => {
  const [template, setTemplate] = useState("modern");

  return (
    <TemplateContext.Provider value={{ template, setTemplate, templates }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => useContext(TemplateContext);
