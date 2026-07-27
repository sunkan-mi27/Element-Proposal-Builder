import AIActionPanel from "./AIActionPanel";
import { shortenProposal } from "../utils/shortenProposal";

const ShortenPanel = () => (
  <AIActionPanel
    title="Shorten"
    summaryAction={shortenProposal}
    scopeAction={shortenProposal}
  />
);

export default ShortenPanel;
