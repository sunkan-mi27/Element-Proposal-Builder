import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="home-intro">
        <h1 className="hero-title">
          <span className="proposal-text">Proposal</span>
          {""}
          <span className="builder-text"> Builder</span>
        </h1>
        <p>
          Create proposals that close <strong>deals</strong> for modern
          businesses
        </p>
      </main>
    </>
  );
};

export default Home;
