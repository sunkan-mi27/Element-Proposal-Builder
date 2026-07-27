import { useAI } from "../context/AIContext";
import "../styles/proposalTimeline.css";

const ProposalTimeline = () => {
  const {
    document: { proposal },
  } = useAI();

  const milestones = [
    {
      week: "Week 1",
      title: "Discovery & Planning",
      done: proposal.projectName !== "",
    },
    {
      week: "Week 2",
      title: "Design & Prototype",
      done: proposal.description !== "",
    },
    {
      week: "Week 3",
      title: "Development",
      done: proposal.deliverables !== "",
    },
    {
      week: "Week 4",
      title: "Testing & Launch",
      done: proposal.timeline !== "",
    },
  ];

  return (
    <div className="proposal-timeline">
      <h3>🗓 Proposal Timeline</h3>

      {milestones.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className={`timeline-dot ${item.done ? "active" : ""}`}></div>

          <div className="timeline-content">
            <small>{item.week}</small>
            <h4>{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProposalTimeline;
