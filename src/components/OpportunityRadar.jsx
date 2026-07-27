import "../styles/opportunityRadar.css";
import { useAI } from "../context/AIContext";

const opportunities = [
  {
    title: "Website Maintenance",
    value: "+$500",
    level: "High Opportunity",
  },
  {
    title: "SEO Optimization",
    value: "+$800",
    level: "Recommended",
  },
  {
    title: "Analytics Dashboard",
    value: "+$1200",
    level: "Premium Add-on",
  },
];
const OpportunityRadar = () => {
  const {
    document: { proposal },
  } = useAI();
  return (
    <div className="opportunity-radar">
      <h3>📡 Opportunity Radar</h3>
      <p>AI detected services you could upsell.</p>

      {opportunities.map((item) => (
        <div className="opportunity-card" key={item.title}>
          <div>
            <h4>{item.title}</h4>
            <small>{item.level}</small>
          </div>

          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default OpportunityRadar;
