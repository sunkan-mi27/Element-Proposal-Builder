import { useEffect, useState } from "react";
import "../styles/proposalReplay.css";
import { useAI } from "../context/AIContext";

const steps = [
  "📖 Reading Executive Summary...",
  "💰 Checking Pricing...",
  "📅 Reviewing Timeline...",
  "🧠 Predicting Client Reaction...",
  "📊 Calculating Win Probability...",
];

const ProposalReplay = () => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const {
    document: { proposal },
  } = useAI();

  useEffect(() => {
    if (!started) return;

    if (step < steps.length) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setFinished(true);
      }, 800);
    }
  }, [started, step]);

  const restart = () => {
    setStarted(false);
    setFinished(false);
    setStep(0);

    setTimeout(() => {
      setStarted(true);
    }, 100);
  };

  return (
    <div className="proposal-replay">
      <h3>🧠 Proposal Replay</h3>

      {!started && (
        <button className="analyze-btn" onClick={() => setStarted(true)}>
          Analyze Proposal
        </button>
      )}

      {started && !finished && (
        <>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(step / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="analysis-steps">
            {steps.slice(0, step).map((item, index) => (
              <p key={index}>✔ {item}</p>
            ))}
          </div>
        </>
      )}

      {finished && (
        <div className="report">
          <h4>Proposal Intelligence Report</h4>

          <div className="report-grid">
            <div className="metric">
              <span>Client Confidence</span>
              <strong>94%</strong>
            </div>

            <div className="metric">
              <span>Professionalism</span>
              <strong>98%</strong>
            </div>

            <div className="metric">
              <span>Readability</span>
              <strong>90%</strong>
            </div>

            <div className="metric">
              <span>Win Probability</span>
              <strong>87%</strong>
            </div>
          </div>

          <button className="analyze-btn" onClick={restart}>
            Analyze Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ProposalReplay;
