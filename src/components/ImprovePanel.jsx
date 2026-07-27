import AIActionPanel from "./AIActionPanel";
import { improveProposal } from "../utils/improveProposal";

const ImprovePanel = () => (
  <AIActionPanel
    title="Improve"
    summaryAction={improveProposal}
    scopeAction={improveProposal}
  />
);

export default ImprovePanel;
