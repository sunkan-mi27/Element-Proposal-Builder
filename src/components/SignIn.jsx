import { Link } from "react-router-dom";
import "../styles/signin.css";

const SignIn = () => {
  return (
    <div className="signin-page">
      <div className="signin-left">
        <div className="brand">
          <div className="brand-logo">PB</div>

          <h1>Elements Proposal Builder</h1>

          <p>
            Create beautiful proposals, impress your clients, and win more
            business.
          </p>
        </div>

        <div className="signin-image">
          <div className="floating-card">
            <h3>Professional Proposal</h3>

            <span>Website Redesign</span>

            <div className="status">Ready to Export</div>
          </div>
        </div>
      </div>

      <div className="signin-right">
        <div className="signin-card">
          <span className="signin-badge">👋 Welcome Back</span>

          <h2>Sign In</h2>

          <p>Continue building proposals where you left off.</p>

          <form>
            <label>Email Address</label>

            <input type="email" placeholder="you@example.com" />

            <label>Password</label>

            <input type="password" placeholder="••••••••" />

            <div className="signin-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="/">Forgot Password?</a>
            </div>

            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="social-button">Continue with Google</button>

          <button className="social-button">Continue with Microsoft</button>

          <p className="signup-text">
            Don't have an account?
            <Link to="/">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
