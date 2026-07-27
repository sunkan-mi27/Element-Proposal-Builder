import { useAI } from "../context/AIContext";
import "../styles/clientQuestions.css";

const ClientQuestions = () => {
  const {
    document: { proposal },
  } = useAI();

  const questions = [];

  if (!proposal.timeline)
    questions.push("📅 When can you deliver this project?");

  if (!proposal.paymentTerms) questions.push("💳 How does payment work?");

  if (!proposal.deliverables) questions.push("📦 Exactly what will I receive?");

  if (!proposal.description || proposal.description.length < 80)
    questions.push("📝 Can you explain your approach in more detail?");

  if (!proposal.budget) questions.push("💰 What's the total investment?");

  return (
    <div className="client-questions">
      <h3>💬 Questions Your Client May Ask</h3>

      {questions.length === 0 ? (
        <div className="perfect">🎉 No major questions predicted.</div>
      ) : (
        questions.map((question, index) => (
          <div className="question-card" key={index}>
            <p>{question}</p>
            <button>Answer With AI</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ClientQuestions;
