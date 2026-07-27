import { Paragraph } from "@unlayer/react-elements";

import { useBrand } from "../context/BrandContext";
import { useProposal } from "../context/ProposalContext";

const Footer = () => {
  const { brand } = useBrand();
  const { proposal } = useProposal();

  return (
    <div className="proposal-footer">
      <Paragraph>
        © {new Date().getFullYear()} {brand.companyName || proposal.companyName}
      </Paragraph>

      {brand.companyWebsite && <Paragraph>{brand.companyWebsite}</Paragraph>}

      {brand.companyEmail && <Paragraph>{brand.companyEmail}</Paragraph>}

      {brand.companyPhone && <Paragraph>{brand.companyPhone}</Paragraph>}

      {brand.companyAddress && <Paragraph>{brand.companyAddress}</Paragraph>}
    </div>
  );
};

export default Footer;
