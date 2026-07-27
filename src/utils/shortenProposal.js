export const shortenProposal = (text) => {
  if (!text.trim()) return "";

  return text.split(".").slice(0, 2).join(".").trim() + ".";
};
