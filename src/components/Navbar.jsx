import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-box">PB</div>

          <div className="logo-text">
            <h2>Element Proposal Builder</h2>
            <span>Create proposals that win clients</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#pricing">Pricing</a>
        </nav>

        {/* Buttons */}
        <div className="nav-actions">
          <button className="signin-btn">Sign In</button>

          <Link to="/builder" className="start-btn">
            Start Building →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
