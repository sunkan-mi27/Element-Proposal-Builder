import BuilderToolbar from "../components/BuilderToolbar";
import ProposalForm from "../components/ProposalForm";
import TemplateSelector from "../components/TemplateSelector";
import DocumentRenderer from "../elements/DocumentRenderer";
import ProposalBlocks from "../components/ProposalBlocks";
import SectionManager from "../components/SectionManager";
import BlockLibrary from "../components/BlockLibrary";
import ExportCenter from "../components/ExportCenter";
import VersionHistory from "../components/VersionHistory";
import SaveVersionButton from "../components/SaveVersionButton";
import useAutosave from "../hooks/useAutosave";
import usePersistence from "../hooks/usePersistence";
import AIStudio from "../components/AIStudio";
import PropertyInspector from "../components/PropertyInspector";
import "../styles/builder.css";

const Builder = () => {
  useAutosave();
  usePersistence();

  return (
    <div className="builder-page">
      <BuilderToolbar />

      <div className="workspace">
        <aside className="workspace-left">
          <AIStudio />
          <TemplateSelector />
          <BlockLibrary />
          <ProposalBlocks />
          <SectionManager />
          <ExportCenter />
          <SaveVersionButton />
          <VersionHistory />
          <ProposalForm />
        </aside>

        <section className="workspace-right">
          <main>
            <DocumentRenderer />
          </main>

          <aside>
            <PropertyInspector />
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Builder;
