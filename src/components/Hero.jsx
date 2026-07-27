import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">🚀 Professional Proposal Builder</span>

        <h1>
          Create proposals
          <br />
          that win clients.
        </h1>

        <p>
          Build polished proposals in minutes with live previews, premium
          templates, and seamless exports powered by Elements.
        </p>

        <div className="hero-buttons">
          <Link to="/builder" className="primary-btn">
            Start Building →
          </Link>

          <button className="secondary-btn">View Demo</button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>500+</h2>
            <span>Proposals Created</span>
          </div>

          <div>
            <h2>4</h2>
            <span>Premium Templates</span>
          </div>

          <div>
            <h2>100%</h2>
            <span>Professional Design</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="proposal-card">
          <div className="proposal-header">
            <div>
              <h3>Proposal</h3>
              <span>Proposal Studio</span>
            </div>

            <div className="status">Ready</div>
          </div>

          <div className="proposal-body">
            <div className="row">
              <span>Client</span>
              <strong>Acme Agency</strong>
            </div>

            <div className="row">
              <span>Project</span>
              <strong>Website Redesign</strong>
            </div>

            <div className="row">
              <span>Timeline</span>
              <strong>4 Weeks</strong>
            </div>

            <div className="row">
              <span>Budget</span>
              <strong>$4,800</strong>
            </div>
          </div>

          <div className="proposal-footer">
            <button>Export Proposal</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
