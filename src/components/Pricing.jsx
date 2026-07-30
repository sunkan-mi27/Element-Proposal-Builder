import { Link } from "react-router-dom";
import "../styles/pricing.css";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for freelancers getting started.",
    features: [
      "4 Proposal Templates",
      "PDF Export",
      "Basic Branding",
      "Unlimited Proposals",
      "Community Support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$19/mo",
    description: "Built for agencies and growing businesses.",
    features: [
      "Unlimited Templates",
      "AI Proposal Assistant",
      "Live Proposal Preview",
      "Brand Kit",
      "Proposal Analytics",
      "Priority Support",
    ],
    button: "Start Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Everything your organization needs.",
    features: [
      "Unlimited Everything",
      "White Label",
      "Team Collaboration",
      "Custom Branding",
      "API Access",
      "Dedicated Manager",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <span className="pricing-badge">💎 Simple Pricing</span>

        <h1>Choose the perfect plan</h1>

        <p>
          Whether you're a freelancer, agency or enterprise, we've got a plan
          that grows with your business.
        </p>
      </section>

      <section className="pricing-toggle">
        <button className="active">Monthly</button>

        <button>
          Yearly
          <span>Save 20%</span>
        </button>
      </section>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && (
              <div className="popular-badge">⭐ Most Popular</div>
            )}

            <h2>{plan.name}</h2>

            <div className="price">{plan.price}</div>

            <p>{plan.description}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <button>{plan.button}</button>
          </div>
        ))}
      </section>

      <section className="pricing-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>Can I change plans later?</h4>

          <p>Absolutely. Upgrade or downgrade your plan at any time.</p>
        </div>

        <div className="faq-item">
          <h4>Do you offer refunds?</h4>

          <p>Yes. We offer a 14-day money-back guarantee on paid plans.</p>
        </div>

        <div className="faq-item">
          <h4>Can I use my own branding?</h4>

          <p>
            Yes. Professional and Enterprise plans include full branding
            customization.
          </p>
        </div>
      </section>

      <section className="pricing-cta">
        <h2>Ready to build proposals that win?</h2>

        <p>
          Join thousands of professionals creating stunning proposals with
          Elements Proposal Builder.
        </p>

        <Link to="/builder" className="cta-button">
          Start Building →
        </Link>
      </section>
    </div>
  );
};

export default Pricing;
