import { useProposal } from "../context/ProposalContext";

const PricingTable = () => {
  const { proposal, setProposal } = useProposal();

  const updateItem = (id, field, value) => {
    setProposal((prev) => ({
      ...prev,
      pricing: prev.pricing.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addRow = () => {
    setProposal((prev) => ({
      ...prev,
      pricing: [
        ...prev.pricing,
        {
          id: crypto.randomUUID(),
          service: "",
          quantity: 1,
          price: 0,
        },
      ],
    }));
  };

  const removeRow = (id) => {
    setProposal((prev) => ({
      ...prev,
      pricing: prev.pricing.filter((item) => item.id !== id),
    }));
  };

  const total = proposal.pricing.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <div className="pricing-table">
      <h3>Pricing</h3>

      {proposal.pricing.map((item) => (
        <div key={item.id} className="pricing-row">
          <input
            placeholder="Service"
            value={item.service}
            onChange={(e) => updateItem(item.id, "service", e.target.value)}
          />

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateItem(item.id, "quantity", Number(e.target.value))
            }
          />

          <input
            type="number"
            min="0"
            value={item.price}
            onChange={(e) =>
              updateItem(item.id, "price", Number(e.target.value))
            }
          />

          <button onClick={() => removeRow(item.id)}>✕</button>
        </div>
      ))}

      <button onClick={addRow}>+ Add Service</button>

      <h3>Total: ${total.toLocaleString()}</h3>
    </div>
  );
};

export default PricingTable;
