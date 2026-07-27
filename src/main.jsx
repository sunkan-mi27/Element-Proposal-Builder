import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { ProposalProvider } from "./context/ProposalContext";
import { TemplateProvider } from "./context/TemplateContext";
import { BlocksProvider } from "./context/BlocksContext";
import { SectionProvider } from "./context/SectionContext";
import { HistoryProvider } from "./context/HistoryContext";
import { DocumentProvider } from "./context/DocumentContext";
import { BrandProvider } from "./context/BrandContext";
import { AIProvider } from "./context/AIContext";
import { InspectorProvider } from "./context/InspectorContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DocumentProvider>
      <BrandProvider>
        <BlocksProvider>
          <ProposalProvider>
            <TemplateProvider>
              <SectionProvider>
                <HistoryProvider>
                  <InspectorProvider>
                    <AIProvider>
                      <App />
                    </AIProvider>
                  </InspectorProvider>
                </HistoryProvider>
              </SectionProvider>
            </TemplateProvider>
          </ProposalProvider>
        </BlocksProvider>
      </BrandProvider>
    </DocumentProvider>
  </React.StrictMode>,
);
