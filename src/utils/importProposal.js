export const importProposal = (
  file,
  setProposal,
  setTemplate,
  setBlocks,
  setSections,
) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = JSON.parse(e.target.result);

    if (data.proposal) setProposal(data.proposal);
    if (data.template) setTemplate(data.template);
    if (data.blocks) setBlocks(data.blocks);
    if (data.sections) setSections(data.sections);
  };

  reader.readAsText(file);
};
