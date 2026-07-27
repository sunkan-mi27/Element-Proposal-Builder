import { useProposal } from "../context/ProposalContext";

const SignatureBlock = () => {
  const { proposal, setProposal } = useProposal();

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProposal((prev) => ({
        ...prev,
        clientSignature: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="signature-block">
      <h3>Client Signature</h3>

      <input
        type="text"
        placeholder="Client Name"
        value={proposal.clientNameSigned}
        onChange={(e) =>
          setProposal((prev) => ({
            ...prev,
            clientNameSigned: e.target.value,
          }))
        }
      />

      <input
        type="date"
        value={proposal.signedDate}
        onChange={(e) =>
          setProposal((prev) => ({
            ...prev,
            signedDate: e.target.value,
          }))
        }
      />

      <input type="file" accept="image/*" onChange={handleFile} />

      {proposal.clientSignature && (
        <img
          src={proposal.clientSignature}
          alt="Signature"
          style={{
            width: 180,
            marginTop: 15,
          }}
        />
      )}
    </div>
  );
};

export default SignatureBlock;
