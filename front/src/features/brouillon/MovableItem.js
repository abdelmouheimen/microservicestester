import React from "react";
import { useDrag } from "react-dnd";

function MovableItem() {
  const [{ isDragging }, drag] = useDrag({
    item: { name: "Any custom name", type: "Irrelevant, for now" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className="movable-item" ref={drag} style={{ opacity }}>
      We will move this item
    </div>
  );
}

export default MovableItem;
