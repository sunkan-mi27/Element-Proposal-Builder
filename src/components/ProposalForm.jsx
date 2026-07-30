import { useEffect, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import PricingTable from "./PricingTable";
import { useProposal } from "../context/ProposalContext";
import ImageUploader from "./ImageUploader";
import CoverPageSettings from "./CoverPageSettings";
import BrandSettings from "./BrandSettings";
import { validateProposal } from "../utils/validateProposal";
import SignaturePad from "./SignaturePad";
import "../styles/proposalForm.css";
import "../styles/validation.css";

const ProposalForm = () => {
  const { proposal, setProposal, updateProposal } = useProposal();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProposal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validation = validateProposal(proposal);

    if (Object.keys(validation).length) {
      setErrors(validation);
    } else {
      setErrors({});
    }
  }, [proposal]);

  return (
    <div className="proposal-form">
      <h2>Build Your Proposal</h2>
      <p>Fill in your project details.</p>

      <ImageUploader
        label="Company Logo"
        value={proposal.logo}
        onChange={(value) =>
          setProposal((prev) => ({
            ...prev,
            logo: value,
          }))
        }
      />

      <ImageUploader
        label="Hero Image"
        value={proposal.heroImage}
        onChange={(value) =>
          setProposal((prev) => ({
            ...prev,
            heroImage: value,
          }))
        }
      />

      <ImageUploader
        label="Team Image"
        value={proposal.teamImage}
        onChange={(value) =>
          setProposal((prev) => ({
            ...prev,
            teamImage: value,
          }))
        }
      />

      <input
        type="text"
        name="clientName"
        placeholder="Client Name"
        value={proposal.clientName}
        onChange={handleChange}
      />
      {errors.clientName && (
        <small className="error">{errors.clientName}</small>
      )}

      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={proposal.companyName}
        onChange={handleChange}
      />
      {errors.companyName && (
        <small className="error">{errors.companyName}</small>
      )}

      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        value={proposal.projectName}
        onChange={handleChange}
      />
      {errors.projectName && (
        <small className="error">{errors.projectName}</small>
      )}

      <h4>Executive Summary</h4>

      <RichTextEditor
        value={proposal.description}
        onChange={(value) =>
          setProposal((prev) => ({
            ...prev,
            description: value,
          }))
        }
      />
      {errors.description && (
        <small className="error">{errors.description}</small>
      )}

      <input
        type="text"
        name="timeline"
        placeholder="Timeline"
        value={proposal.timeline}
        onChange={handleChange}
      />
      <PricingTable />

      <h4>Scope of Work</h4>

      <RichTextEditor
        value={proposal.deliverables}
        onChange={(value) =>
          setProposal((prev) => ({
            ...prev,
            deliverables: value,
          }))
        }
      />

      <h4>Payment Terms</h4>

      <RichTextEditor
        value={proposal.paymentTerms}
        onChange={(value) =>
          setProposal((prev) => ({
            ...prev,
            paymentTerms: value,
          }))
        }
      />

      <input
        type="text"
        name="projectDuration"
        placeholder="Project Duration"
        value={proposal.projectDuration}
        onChange={handleChange}
      />

      <label>About Us</label>

      <textarea
        name="aboutUs"
        value={proposal.aboutUs}
        onChange={handleChange}
        rows={5}
      />

      <label>Testimonials</label>

      <textarea
        name="testimonials"
        value={proposal.testimonials}
        onChange={handleChange}
        rows={5}
      />

      <label>FAQ</label>

      <textarea
        name="faq"
        value={proposal.faq}
        onChange={handleChange}
        rows={5}
      />

      <label>Next Steps</label>

      <textarea
        name="nextSteps"
        value={proposal.nextSteps}
        onChange={handleChange}
        rows={5}
      />

      <label>Currency</label>

      <select name="currency" value={proposal.currency} onChange={handleChange}>
        <option value="USD">$ USD</option>
        <option value="EUR">€ EUR</option>
        <option value="GBP">£ GBP</option>
        <option value="NGN">₦ NGN</option>
      </select>

      <label>Discount (%)</label>

      <input
        type="number"
        name="discount"
        value={proposal.discount}
        onChange={handleChange}
      />

      <label>Tax (%)</label>

      <input
        type="number"
        name="tax"
        value={proposal.tax}
        onChange={handleChange}
      />

      <SignaturePad />
      <BrandSettings />
      <CoverPageSettings />
    </div>
  );
};

export default ProposalForm;
