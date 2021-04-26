import React from "react";
import { useDrop } from "react-dnd";

function Column({ children, className, title }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Irrelevant, for now",
    drop: () => ({ name: "Some name" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  console.log("options", { canDrop, isOver });

  return (
    <div ref={drop} className={className}>
      {title}
      {children}
    </div>
  );
}

export default Column;
