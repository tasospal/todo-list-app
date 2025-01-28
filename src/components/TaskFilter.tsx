import React from "react";

interface TaskFilterProps {
  filter: "All" | "Completed" | "Pending";
  setFilter: (filter: "All" | "Completed" | "Pending") => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {["All", "Completed", "Pending"].map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f as "All" | "Completed" | "Pending")}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
