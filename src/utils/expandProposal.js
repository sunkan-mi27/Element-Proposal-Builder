export const expandProposal = (text) => {
  if (!text.trim()) return "";

  return (
    text.trim() +
    "\n\nThis proposal has been carefully prepared to ensure the project objectives are achieved efficiently while maintaining high standards of quality, communication, and transparency throughout every phase of delivery."
  );
};
