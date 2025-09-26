export default function Task({ task, sourceCol }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("sourceCol", sourceCol);
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={handleDragStart}
    >
      {task}
    </div>
  );
}
