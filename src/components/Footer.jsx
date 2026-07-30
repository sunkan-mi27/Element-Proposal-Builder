import { Paragraph } from "@unlayer/react-elements";

const Footer = ({ proposal }) => {
  return (
    <div className="proposal-footer">
      <Paragraph>
        © {new Date().getFullYear()}{" "}
        {proposal.companyName || "Element Proposal Builder"}
      </Paragraph>
    </div>
  );
};

export default Footer;
