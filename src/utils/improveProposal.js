export const improveProposal = (text) => {
  if (!text.trim()) return "";

  let improved = text.trim();

  if (!improved.endsWith(".")) {
    improved += ".";
  }

  improved +=
    "\n\nOur team will ensure clear communication, timely delivery, and high-quality execution throughout this engagement.";

  return improved;
};
