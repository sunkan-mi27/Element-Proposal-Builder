export const analyzeProposal = (proposal) => {
  let score = 100;
  const issues = [];

  if (!proposal.clientName.trim()) {
    score -= 10;
    issues.push("Missing client name.");
  }

  if (!proposal.companyName.trim()) {
    score -= 10;
    issues.push("Missing company name.");
  }

  if (!proposal.projectName.trim()) {
    score -= 10;
    issues.push("Missing project name.");
  }

  if (!proposal.description.trim()) {
    score -= 20;
    issues.push("Executive summary is empty.");
  }

  if (!proposal.deliverables.trim()) {
    score -= 15;
    issues.push("Scope of work is empty.");
  }

  if (!proposal.paymentTerms.trim()) {
    score -= 10;
    issues.push("Payment terms are missing.");
  }

  if (!proposal.pricing.length) {
    score -= 20;
    issues.push("No pricing has been added.");
  }

  return {
    score: Math.max(score, 0),
    issues,
  };
};
