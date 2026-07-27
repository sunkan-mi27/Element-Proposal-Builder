import { createContext, useContext, useState } from "react";

const ProposalContext = createContext();

export const ProposalProvider = ({ children }) => {
  const [proposal, setProposal] = useState({
    clientName: "",
    companyName: "",
    projectName: "",
    description: "",
    timeline: "",
    pricing: [
      {
        id: crypto.randomUUID(),
        service: "",
        quantity: 1,
        price: 0,
      },
    ],
    deliverables: "",
    paymentTerms: "",
    projectDuration: "",
    preparedBy: "Elements Proposal Builder",
    logo: "",
    heroImage: "",
    teamImage: "",
    clientSignature: "",
    clientNameSigned: "",
    signedDate: "",
    coverTitle: "",
    coverSubtitle: "",
    coverBackground: "",
  });

  const updateProposal = (field, value) => {
    setProposal((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ProposalContext.Provider
      value={{
        proposal,
        setProposal,
        updateProposal,
      }}
    >
      {children}
    </ProposalContext.Provider>
  );
};

export const useProposal = () => useContext(ProposalContext);
