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
          <Link to="/features">Features</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/signin" className="signin-btn">
            Sign In
          </Link>

          <Link to="/builder" className="start-btn">
            Start Building →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
