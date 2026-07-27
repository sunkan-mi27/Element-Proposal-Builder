export const exportHTML = (proposal) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${proposal.projectName}</title>

<style>
body{
    font-family:Arial,sans-serif;
    max-width:900px;
    margin:40px auto;
    line-height:1.7;
    color:#222;
}
h1,h2{
    color:#111827;
}
hr{
    margin:30px 0;
}
</style>

</head>

<body>

<h1>${proposal.projectName}</h1>

<p><strong>Prepared For:</strong> ${proposal.clientName}</p>

<p><strong>Company:</strong> ${proposal.companyName}</p>

<hr>

<h2>Executive Summary</h2>

<p>${proposal.description}</p>

<hr>

<h2>Scope of Work</h2>

<p>${proposal.deliverables}</p>

<hr>

<h2>Timeline</h2>

<p>${proposal.timeline}</p>

<hr>

<h2>Investment</h2>

<p>${proposal.budget}</p>

<hr>

<h2>Payment Terms</h2>

<p>${proposal.paymentTerms}</p>

</body>
</html>
`;

  const blob = new Blob([html], {
    type: "text/html",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${proposal.projectName || "proposal"}.html`;

  link.click();

  URL.revokeObjectURL(url);
};
