export const exportProposal = ({ proposal, template, blocks, sections }) => {
  const data = {
    proposal,
    template,
    blocks,
    sections,
    exportedAt: new Date().toISOString(),
    version: "1.0",
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `${proposal.projectName || "proposal"}.json`;

  link.click();

  URL.revokeObjectURL(url);
};
