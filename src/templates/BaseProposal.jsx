import {
  Document,
  Heading,
  Paragraph,
  Divider,
  Image,
} from "@unlayer/react-elements";

import { useProposal } from "../context/ProposalContext";
import { useBlocks } from "../context/BlocksContext";
import { useSections } from "../context/SectionContext";
import HtmlContent from "../components/HtmlContent";
import { useBrand } from "../context/BrandContext";
import themes from "./themes";
import "../styles/proposalDocument.css";
import Footer from "../components/Footer";
import { useInspector } from "../context/InspectorContext";

const BaseProposal = ({ theme = "agency" }) => {
  const { proposal } = useProposal();
  const { blocks } = useBlocks();
  const { sections } = useSections();
  const { brand } = useBrand();

  const currentTheme = themes[theme] || themes.agency;
  const { setSelected } = useInspector();

  const headingStyle = {
    color: brand.primaryColor || currentTheme.primary,
    fontFamily: currentTheme.headingFont,
  };

  const sectionMap = {
    summary: (
      <div className="proposal-section">
        <Heading
          style={headingStyle}
          onClick={() =>
            setSelected({
              id: "summary-heading",
              type: "Heading",
            })
          }
        >
          Executive Summary
        </Heading>

        {proposal.description ? (
          <HtmlContent html={proposal.description} />
        ) : (
          <Paragraph>Your executive summary will appear here.</Paragraph>
        )}

        <Divider />
      </div>
    ),

    scope: (
      <div className="proposal-section">
        <Heading
          style={headingStyle}
          onClick={() =>
            setSelected({
              id: "scope-heading",
              type: "Heading",
            })
          }
        >
          Scope of Work
        </Heading>

        {proposal.deliverables ? (
          <HtmlContent html={proposal.deliverables} />
        ) : (
          <Paragraph>Scope of work goes here.</Paragraph>
        )}

        <Divider />
      </div>
    ),

    timeline: (
      <div className="proposal-section">
        <Heading
          style={headingStyle}
          onClick={() =>
            setSelected({
              id: "timeline-heading",
              type: "Heading",
            })
          }
        >
          Timeline
        </Heading>

        <Paragraph>{proposal.timeline || "4 Weeks"}</Paragraph>

        <Divider />
      </div>
    ),

    investment: (
      <div className="proposal-section">
        <Heading
          style={headingStyle}
          onClick={() =>
            setSelected({
              id: "investment-heading",
              type: "Heading",
            })
          }
        >
          Investment
        </Heading>

        {proposal.pricing.map((item) => (
          <Paragraph key={item.id}>
            {item.service || "Service"} — {item.quantity} × $
            {item.price.toLocaleString()} = $
            {(item.quantity * item.price).toLocaleString()}
          </Paragraph>
        ))}

        <Divider />
      </div>
    ),

    payment: (
      <div className="proposal-section">
        <Heading
          style={headingStyle}
          onClick={() =>
            setSelected({
              id: "payment-heading",
              type: "Heading",
            })
          }
        >
          Payment Terms
        </Heading>

        {proposal.paymentTerms ? (
          <HtmlContent html={proposal.paymentTerms} />
        ) : (
          <Paragraph>Payment terms will appear here.</Paragraph>
        )}

        <Divider />
      </div>
    ),

    about: (
      <div className="proposal-section">
        <Heading level={2} style={headingStyle}>
          About Us
        </Heading>

        <Paragraph>
          We help businesses deliver high-quality projects through thoughtful
          planning and execution.
        </Paragraph>

        {proposal.teamImage && (
          <Image
            src={proposal.teamImage}
            alt="Team"
            style={{
              width: "100%",
              marginTop: 20,
            }}
          />
        )}
        <Divider />
      </div>
    ),

    testimonials: (
      <div className="proposal-section">
        <Heading level={2} style={headingStyle}>
          Testimonials
        </Heading>

        <Paragraph>
          "Professional, reliable, and exceeded expectations."
        </Paragraph>

        <Divider />
      </div>
    ),

    faq: (
      <div className="proposal-section">
        <Heading level={2} style={headingStyle}>
          Frequently Asked Questions
        </Heading>

        <Paragraph>Common client questions will appear here.</Paragraph>

        <Divider />
      </div>
    ),

    nextSteps: (
      <div className="proposal-section">
        <Heading level={2} style={headingStyle}>
          Next Steps
        </Heading>

        <Paragraph>
          Accept this proposal and we'll schedule the project kickoff.
        </Paragraph>
      </div>
    ),

    signature: (
      <div className="proposal-section">
        <Heading level={2} style={headingStyle}>
          Client Acceptance
        </Heading>

        <Paragraph>
          <strong>Name:</strong>{" "}
          {proposal.clientNameSigned || "________________"}
        </Paragraph>

        <Paragraph>
          <strong>Date:</strong> {proposal.signedDate || "________________"}
        </Paragraph>

        {proposal.clientSignature && (
          <Image
            src={proposal.clientSignature}
            alt="Client Signature"
            style={{
              width: 180,
              marginTop: 15,
            }}
          />
        )}
      </div>
    ),
  };

  return (
    <Document
      className="proposal-document"
      style={{
        background: currentTheme.background,
        color: currentTheme.text,
        padding: 40,
        fontFamily: currentTheme.bodyFont,
      }}
    >
      {proposal.coverBackground && (
        <Image
          src={proposal.coverBackground}
          alt="Cover Background"
          style={{
            width: "100%",
            height: 260,
            marginBottom: 30,
          }}
        />
      )}

      <div className="proposal-header">
        <Heading
          style={{
            ...headingStyle,
            textAlign: "center",
            fontSize: 34,
          }}
        >
          {proposal.coverTitle || proposal.projectName || "Business Proposal"}
        </Heading>

        <Paragraph
          style={{
            textAlign: "center",
            marginBottom: 35,
          }}
        >
          {proposal.coverSubtitle}
        </Paragraph>

        <Heading
          style={headingStyle}
          onClick={() =>
            setSelected({
              id: "title",
              type: "Heading",
            })
          }
        >
          {proposal.projectName || "Website Redesign Proposal"}
        </Heading>

        {proposal.logo ||
          (brand.logo && (
            <Image
              src={proposal.logo || brand.logo}
              alt="Company Logo"
              style={{
                width: 140,
                marginBottom: 20,
              }}
            />
          ))}

        {proposal.heroImage && (
          <Image
            src={proposal.heroImage}
            alt="Hero"
            style={{
              width: "100%",
              marginTop: 10,
              marginBottom: 30,
            }}
          />
        )}

        <Paragraph>
          <strong>Prepared For:</strong> {proposal.clientName || "Client Name"}
        </Paragraph>

        <Paragraph>
          <strong>Company:</strong> {proposal.companyName || brand.companyName}
        </Paragraph>
      </div>
      <Divider />

      {sections.map((section) =>
        blocks[section.id] ? (
          <div key={section.id}>{sectionMap[section.id]}</div>
        ) : null,
      )}
      <Footer />
    </Document>
  );
};

export default BaseProposal;
