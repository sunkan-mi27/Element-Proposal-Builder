import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useSections } from "../context/SectionContext";
import SortableSection from "./SortableSection";

const SectionManager = () => {
  const { sections, setSections } = useSections();

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex((item) => item.id === active.id);

    const newIndex = sections.findIndex((item) => item.id === over.id);

    setSections(arrayMove(sections, oldIndex, newIndex));
  };

  return (
    <div>
      <h3>Section Manager</h3>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={sections}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => (
            <SortableSection key={section.id} section={section} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default SectionManager;
