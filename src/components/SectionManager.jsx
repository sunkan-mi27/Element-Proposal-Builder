import { useState } from "react";
import { useSections } from "../context/SectionContext";
import "../styles/sectionManager.css";

const SectionManager = () => {
  const { sections, setSections } = useSections();

  const [dragIndex, setDragIndex] = useState(null);

  const handleDrop = (dropIndex) => {
    const copy = [...sections];

    const dragged = copy[dragIndex];

    copy.splice(dragIndex, 1);

    copy.splice(dropIndex, 0, dragged);

    setSections(copy);
  };

  return (
    <div className="section-manager">
      <h3>📦 Section Manager</h3>

      {sections.map((section, index) => (
        <div
          key={section.id}
          className="section-item"
          draggable
          onDragStart={() => setDragIndex(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
        >
          <span>☰</span>

          <p>{section.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionManager;
