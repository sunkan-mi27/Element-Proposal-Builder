export const validateProposal = (proposal) => {
  const errors = {};

  if (!proposal.clientName.trim())
    errors.clientName = "Client name is required.";

  if (!proposal.companyName.trim())
    errors.companyName = "Company name is required.";

  if (!proposal.projectName.trim())
    errors.projectName = "Project name is required.";

  if (!proposal.description.trim())
    errors.description = "Executive summary is required.";

  return errors;
};
