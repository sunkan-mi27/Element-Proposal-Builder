import AIActionPanel from "./AIActionPanel";
import { expandProposal } from "../utils/expandProposal";

const ExpandPanel = () => (
  <AIActionPanel
    title="Expand"
    summaryAction={expandProposal}
    scopeAction={expandProposal}
  />
);

export default ExpandPanel;
