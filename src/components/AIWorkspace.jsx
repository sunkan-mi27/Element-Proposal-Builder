import { useState } from "react";
import ProposalHealth from "./ProposalHealth";
import AISuggestions from "./AISuggestions";
import ProposalDNA from "./ProposalDNA";
import ProposalReplay from "./ProposalReplay";
import ProposalXray from "./ProposalXray";
import OpportunityRadar from "./OpportunityRadar";
import WinProbability from "./WinProbability";
import ObjectionPredictor from "./ObjectionPredictor";
import ClientQuestions from "./ClientQuestions";
import ProposalTimeline from "./ProposalTimeline";
import ProposalComparison from "./ProposalComparison";
import ProposalInsights from "./ProposalInsights";
import { useAI } from "../context/AIContext";
import RewritePanel from "./RewritePanel";
import ImprovePanel from "./ImprovePanel";
import ExpandPanel from "./ExpandPanel";
import ShortenPanel from "./ShortenPanel";
import "../styles/aiWorkspace.css";

const tabs = [
  "Health",
  "Rewrite",
  "Improve",
  "Expand",
  "Shorten",
  "DNA",
  "Replay",
  "X-Ray",
  "Radar",
  "Probability",
  "Objections",
  "Questions",
  "Timeline",
  "Comparison",
  "Insights",
];

const AIWorkspace = () => {
  const [activeTab, setActiveTab] = useState("Health");
  const { document } = useAI();

  return (
    <div className="ai-workspace">
      <h3>🤖 AI Workspace</h3>

      <div className="ai-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="ai-panel">
        {activeTab === "Health" && <ProposalHealth />}

        {activeTab === "Rewrite" && <RewritePanel />}

        {activeTab === "Improve" && <ImprovePanel />}

        {activeTab === "Expand" && <ExpandPanel />}

        {activeTab === "Shorten" && <ShortenPanel />}

        {activeTab === "DNA" && <ProposalDNA />}

        {activeTab === "Replay" && <ProposalReplay />}

        {activeTab === "X-Ray" && <ProposalXray />}

        {activeTab === "Radar" && <OpportunityRadar />}

        {activeTab === "Probability" && <WinProbability />}

        {activeTab === "Objections" && <ObjectionPredictor />}

        {activeTab === "Questions" && <ClientQuestions />}

        {activeTab === "Timeline" && <ProposalTimeline />}

        {activeTab === "Comparison" && <ProposalComparison />}

        {activeTab === "Insights" && <ProposalInsights />}
      </div>
    </div>
  );
};

export default AIWorkspace;
