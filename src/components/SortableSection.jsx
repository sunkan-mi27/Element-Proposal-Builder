import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableSection = ({ section }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: section.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "grab",
    background: "#fff",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      ☰ {section.title}
    </div>
  );
};

export default SortableSection;
