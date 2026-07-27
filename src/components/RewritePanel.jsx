import AIActionPanel from "./AIActionPanel";
import { rewriteProposal } from "../utils/rewriteProposal";

const RewritePanel = () => (
  <AIActionPanel
    title="Rewrite"
    summaryAction={rewriteProposal}
    scopeAction={rewriteProposal}
  />
);

export default RewritePanel;
