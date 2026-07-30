import { Heading, Paragraph, Divider, Image } from "@unlayer/react-elements";

import { useProposal } from "../context/ProposalContext";
import { useBlocks } from "../context/BlocksContext";
import { useSections } from "../context/SectionContext";
import { useBrand } from "../context/BrandContext";
import { useInspector } from "../context/InspectorContext";
import { useStyles } from "../context/StyleContext";

import HtmlContent from "../components/HtmlContent";
import Footer from "../components/Footer";
import themes from "./themes";

import "../styles/proposalDocument.css";

const BaseProposal = ({ theme = "agency" }) => {
  const { proposal } = useProposal();
  const { blocks } = useBlocks();
  const { sections } = useSections();
  const { brand } = useBrand();
  const { setSelected } = useInspector();
  const { styles } = useStyles();

  const currentTheme = themes[theme] || themes.agency;

  const sectionStyle = {
    background: currentTheme.cardBackground || "transparent",
    borderRadius: currentTheme.borderRadius || 0,
    padding: currentTheme.sectionPadding || 0,
    marginBottom: 30,
    boxShadow: currentTheme.shadow || "none",
    border: currentTheme.border || "none",
  };

  const headingStyle = {
    color: brand.primaryColor || currentTheme.primary,
    fontFamily: currentTheme.headingFont,
  };

  const headingStyles = {
    ...headingStyle,
    ...styles.Heading,
  };

  const paragraphStyles = {
    ...styles.Paragraph,
  };

  const imageStyles = {
    ...styles.Image,
  };

  const subtotal = proposal.pricing.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  const discountAmount = subtotal * ((proposal.discount || 0) / 100);

  const taxedSubtotal = subtotal - discountAmount;

  const taxAmount = taxedSubtotal * ((proposal.tax || 0) / 100);

  const grandTotal = taxedSubtotal + taxAmount;

  const hasServices = proposal.pricing.some(
    (item) => item.service.trim() !== "",
  );

  const sectionMap = {
    summary: (
      <div className="proposal-section" style={sectionStyle}>
        <div
          onClick={() =>
            setSelected({
              id: "summary-heading",
              type: "Heading",
            })
          }
        >
          <Heading style={headingStyles}>Executive Summary</Heading>
        </div>
        {proposal.description ? (
          <div
            onClick={() =>
              setSelected({
                id: "summary-text",
                type: "Paragraph",
              })
            }
          >
            <HtmlContent html={proposal.description} />
          </div>
        ) : (
          <div
            onClick={() =>
              setSelected({
                id: "summary-text",
                type: "Paragraph",
              })
            }
          >
            <Paragraph style={paragraphStyles}>
              Your executive summary will appear here.
            </Paragraph>
          </div>
        )}

        <Divider />
      </div>
    ),

    scope: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
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
          <div
            onClick={() =>
              setSelected({
                id: "scope-text",
                type: "Paragraph",
              })
            }
          >
            <HtmlContent html={proposal.deliverables} />
          </div>
        ) : (
          <Paragraph
            style={paragraphStyles}
            onClick={() =>
              setSelected({
                id: "scope-text",
                type: "Paragraph",
              })
            }
          >
            Scope of work goes here.
          </Paragraph>
        )}

        <Divider />
      </div>
    ),

    timeline: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
          onClick={() =>
            setSelected({
              id: "timeline-heading",
              type: "Heading",
            })
          }
        >
          Timeline
        </Heading>

        <Paragraph
          style={paragraphStyles}
          onClick={() =>
            setSelected({
              id: "timeline-text",
              type: "Paragraph",
            })
          }
        >
          {proposal.timeline || "4 Weeks"}
        </Paragraph>

        <Divider />
      </div>
    ),

    investment: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
          onClick={() =>
            setSelected({
              id: "investment-heading",
              type: "Heading",
            })
          }
        >
          Investment
        </Heading>

        {proposal.pricing?.length ? (
          <>
            <div
              className="pricing-table"
              onClick={() =>
                setSelected({
                  id: "pricing-table",
                  type: "Pricing",
                })
              }
            >
              <div className="pricing-header">
                <span>Service</span>
                <span>Qty</span>
                <span>Unit Price</span>
                <span>Total</span>
              </div>

              {hasServices ? (
                proposal.pricing
                  .filter((item) => item.service.trim() !== "")
                  .map((item) => (
                    <div className="pricing-item" key={item.id}>
                      <span>{item.service || "Untitled Service"}</span>
                      <span>{item.quantity}</span>

                      <span>
                        {proposal.currency}{" "}
                        {Number(item.price).toLocaleString()}
                      </span>

                      <span>
                        {proposal.currency}{" "}
                        {(item.quantity * item.price).toLocaleString()}
                      </span>
                    </div>
                  ))
              ) : (
                <div className="pricing-empty">No services added yet.</div>
              )}
            </div>

            <div className="pricing-footer">
              <div className="pricing-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>
                    {proposal.currency} {subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Discount</span>
                  <span>
                    - {proposal.currency} {discountAmount.toLocaleString()}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Tax</span>
                  <span>
                    {proposal.currency} {taxAmount.toLocaleString()}
                  </span>
                </div>

                <div className="summary-total">
                  <span>Grand Total</span>
                  <span>
                    {proposal.currency} {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <Paragraph
                className="pricing-note"
                style={paragraphStyles}
                onClick={() =>
                  setSelected({
                    id: "pricing-note",
                    type: "Paragraph",
                  })
                }
              >
                This quotation is valid for 30 days from the proposal date.
              </Paragraph>
            </div>
          </>
        ) : (
          <Paragraph style={paragraphStyles}>
            No pricing has been added yet.
          </Paragraph>
        )}

        <Divider />
      </div>
    ),
    payment: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
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
          <div
            onClick={() =>
              setSelected({
                id: "payment-text",
                type: "Paragraph",
              })
            }
          >
            <HtmlContent html={proposal.paymentTerms} />
          </div>
        ) : (
          <Paragraph
            style={paragraphStyles}
            onClick={() =>
              setSelected({
                id: "payment-text",
                type: "Paragraph",
              })
            }
          >
            Payment terms will appear here.
          </Paragraph>
        )}

        <Divider />
      </div>
    ),

    about: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
          onClick={() =>
            setSelected({
              id: "about-heading",
              type: "Heading",
            })
          }
        >
          About Us
        </Heading>

        <Paragraph
          style={paragraphStyles}
          onClick={() =>
            setSelected({
              id: "about-text",
              type: "Paragraph",
            })
          }
        >
          {proposal.aboutUs ||
            "Tell your client why they should choose your company."}
        </Paragraph>

        {proposal.teamImage && (
          <Image
            src={proposal.teamImage}
            alt="Team"
            style={{
              ...imageStyles,
              width: "100%",
              marginTop: 20,
            }}
            onClick={() =>
              setSelected({
                id: "team-image",
                type: "Image",
              })
            }
          />
        )}

        <Divider />
      </div>
    ),

    testimonials: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
          onClick={() =>
            setSelected({
              id: "testimonial-heading",
              type: "Heading",
            })
          }
        >
          Testimonials
        </Heading>

        <Paragraph
          style={paragraphStyles}
          onClick={() =>
            setSelected({
              id: "testimonial-text",
              type: "Paragraph",
            })
          }
        >
          {proposal.testimonials || "Client testimonials will appear here."}
        </Paragraph>

        <Divider />
      </div>
    ),

    faq: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
          onClick={() =>
            setSelected({
              id: "faq-heading",
              type: "Heading",
            })
          }
        >
          Frequently Asked Questions
        </Heading>

        <Paragraph
          style={paragraphStyles}
          onClick={() =>
            setSelected({
              id: "faq-text",
              type: "Paragraph",
            })
          }
        >
          {proposal.faq || "Frequently asked questions will appear here."}
        </Paragraph>

        <Divider />
      </div>
    ),

    nextSteps: (
      <div className="proposal-section" style={sectionStyle}>
        <Heading
          style={headingStyles}
          onClick={() =>
            setSelected({
              id: "nextsteps-heading",
              type: "Heading",
            })
          }
        >
          Next Steps
        </Heading>

        <Paragraph
          style={paragraphStyles}
          onClick={() =>
            setSelected({
              id: "nextsteps-text",
              type: "Paragraph",
            })
          }
        >
          <HtmlContent
            html={
              proposal.nextSteps ||
              "Explain what happens after the client accepts the proposal."
            }
          />
        </Paragraph>

        <Divider />
      </div>
    ),

    signature: (
      <div
        className="proposal-section"
        style={sectionStyle}
        onClick={() =>
          setSelected({
            id: "signature",
            type: "Signature",
          })
        }
      >
        <Heading style={headingStyles}>Client Acceptance</Heading>

        <Paragraph style={paragraphStyles}>
          <strong>Name:</strong>{" "}
          {proposal.clientNameSigned || "________________"}
        </Paragraph>

        <Paragraph style={paragraphStyles}>
          <strong>Date:</strong> {proposal.signedDate || "________________"}
        </Paragraph>

        {proposal.clientSignature && (
          <Image
            src={proposal.clientSignature}
            alt="Client Signature"
            style={{
              ...imageStyles,
              width: 180,
              marginTop: 20,
            }}
          />
        )}

        <Divider />
      </div>
    ),
  };
  return (
    <div
      className="proposal-document"
      style={{
        background: currentTheme.background,
        color: currentTheme.text,
        fontFamily: currentTheme.bodyFont,
      }}
    >
      {proposal.coverBackground && (
        <Image
          src={proposal.coverBackground}
          alt="Cover Background"
          style={{
            ...imageStyles,
            width: "100%",
            height: 260,
            marginBottom: 30,
          }}
          onClick={() =>
            setSelected({
              id: "cover-image",
              type: "Image",
            })
          }
        />
      )}

      <div className="proposal-header">
        <Heading
          style={{
            ...headingStyles,
            textAlign: "center",
            fontSize: 34,
          }}
          onClick={() =>
            setSelected({
              id: "cover-title",
              type: "Heading",
            })
          }
        >
          {proposal.coverTitle || proposal.projectName || "Business Proposal"}
        </Heading>

        <Paragraph
          style={{
            ...paragraphStyles,
            textAlign: "center",
            marginBottom: 35,
          }}
          onClick={() =>
            setSelected({
              id: "cover-subtitle",
              type: "Paragraph",
            })
          }
        >
          {proposal.coverSubtitle}
        </Paragraph>

        <Heading
          style={headingStyles}
          onClick={() =>
            setSelected({
              id: "project-title",
              type: "Heading",
            })
          }
        >
          {proposal.projectName || "Website Redesign Proposal"}
        </Heading>

        {(proposal.logo || brand.logo) && (
          <Image
            src={proposal.logo || brand.logo}
            alt="Company Logo"
            style={{
              ...imageStyles,
              width: 140,
              marginBottom: 20,
            }}
            onClick={() =>
              setSelected({
                id: "logo",
                type: "Image",
              })
            }
          />
        )}

        {proposal.heroImage && (
          <div
            onClick={() =>
              setSelected({
                id: "hero-image",
                type: "Image",
              })
            }
          >
            <Image src={proposal.heroImage} style={imageStyles} />
          </div>
        )}

        <Paragraph
          style={paragraphStyles}
          onClick={() =>
            setSelected({
              id: "client-name",
              type: "Paragraph",
            })
          }
        >
          <strong>Prepared For:</strong> {proposal.clientName || "Client Name"}
        </Paragraph>

        <Paragraph
          style={paragraphStyles}
          onClick={() =>
            setSelected({
              id: "company-name",
              type: "Paragraph",
            })
          }
        >
          <strong>Company:</strong> {proposal.companyName || brand.companyName}
        </Paragraph>
      </div>

      <Divider />

      {sections.map((section) =>
        blocks[section.id] ? (
          <div key={section.id}>{sectionMap[section.id]}</div>
        ) : null,
      )}

      <Footer proposal={proposal} />
    </div>
  );
};

export default BaseProposal;
