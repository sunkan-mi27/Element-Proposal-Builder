export const rewriteProposal = (text) => {
  if (!text.trim()) return "";

  return text
    .replaceAll("help", "assist")
    .replaceAll("use", "utilize")
    .replaceAll("make", "deliver")
    .replaceAll("good", "high-quality")
    .replaceAll("fast", "efficient")
    .replaceAll("cheap", "cost-effective")
    .replaceAll("website", "digital platform")
    .replaceAll("project", "engagement");
};
