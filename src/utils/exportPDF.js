import { jsPDF } from "jspdf";

export const exportPDF = (proposal) => {
  const pdf = new jsPDF();

  let y = 20;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);
  pdf.text(proposal.projectName || "Proposal", 20, y);

  y += 15;

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");

  pdf.text(`Prepared For: ${proposal.clientName || ""}`, 20, y);
  y += 10;

  pdf.text(`Company: ${proposal.companyName || ""}`, 20, y);
  y += 15;

  pdf.setFont("helvetica", "bold");

  pdf.text("Executive Summary", 20, y);
  y += 8;

  pdf.setFont("helvetica", "normal");
  pdf.text(pdf.splitTextToSize(proposal.description || "", 170), 20, y);

  y += 30;

  pdf.setFont("helvetica", "bold");
  pdf.text("Scope of Work", 20, y);

  y += 8;

  pdf.setFont("helvetica", "normal");
  pdf.text(pdf.splitTextToSize(proposal.deliverables || "", 170), 20, y);

  y += 30;

  pdf.setFont("helvetica", "bold");
  pdf.text("Timeline", 20, y);

  y += 8;

  pdf.setFont("helvetica", "normal");
  pdf.text(proposal.timeline || "", 20, y);

  y += 15;

  pdf.setFont("helvetica", "bold");
  pdf.text("Investment", 20, y);

  y += 8;

  pdf.setFont("helvetica", "normal");
  pdf.text(proposal.budget || "", 20, y);

  y += 15;

  pdf.setFont("helvetica", "bold");
  pdf.text("Payment Terms", 20, y);

  y += 8;

  pdf.setFont("helvetica", "normal");
  pdf.text(pdf.splitTextToSize(proposal.paymentTerms || "", 170), 20, y);

  pdf.save(`${proposal.projectName || "proposal"}.pdf`);
};
