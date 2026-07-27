import { Paragraph } from "@unlayer/react-elements";

import { useBrand } from "../context/BrandContext";
import { useProposal } from "../context/ProposalContext";

const Footer = () => {
  // const { brand } = useBrand();
  const { proposal } = useProposal();

  return (
    <div className="proposal-footer">
      <Paragraph>
        © {new Date().getFullYear()}{" "}
        {proposal.companyName || "Element Proposal Studio"}
      </Paragraph>
    </div>
  );
};

export default Footer;
