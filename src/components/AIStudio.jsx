import { useState } from "react";

import ProposalHealth from "./ProposalHealth";
import RewritePanel from "./RewritePanel";
import ImprovePanel from "./ImprovePanel";
import ExpandPanel from "./ExpandPanel";
import ShortenPanel from "./ShortenPanel";
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

import "../styles/aiStudio.css";

const tools = [
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

const AIStudio = () => {
  const [active, setActive] = useState("Health");

  return (
    <div className="ai-studio">
      <aside className="ai-sidebar">
        <h3>AI Studio</h3>

        {tools.map((tool) => (
          <button
            key={tool}
            className={active === tool ? "active" : ""}
            onClick={() => setActive(tool)}
          >
            {tool}
          </button>
        ))}
      </aside>

      <section className="ai-content">
        {active === "Health" && <ProposalHealth />}
        {active === "Rewrite" && <RewritePanel />}
        {active === "Improve" && <ImprovePanel />}
        {active === "Expand" && <ExpandPanel />}
        {active === "Shorten" && <ShortenPanel />}
        {active === "DNA" && <ProposalDNA />}
        {active === "Replay" && <ProposalReplay />}
        {active === "X-Ray" && <ProposalXray />}
        {active === "Radar" && <OpportunityRadar />}
        {active === "Probability" && <WinProbability />}
        {active === "Objections" && <ObjectionPredictor />}
        {active === "Questions" && <ClientQuestions />}
        {active === "Timeline" && <ProposalTimeline />}
        {active === "Comparison" && <ProposalComparison />}
        {active === "Insights" && <ProposalInsights />}
      </section>
    </div>
  );
};

export default AIStudio;
