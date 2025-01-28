import React from "react";
import { Task } from "./types";

interface TaskListProps {
  tasks: Task[];
  updateTask: (id: number, completed: boolean) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  updateTask,
  deleteTask,
}) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <span>{task.text}</span>
          <div className="task-actions">
            <button
              className="primary"
              onClick={() => updateTask(task.id, !task.completed)}
            >
              {task.completed ? "Uncomplete" : "Complete"}
            </button>
            <button className="secondary" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
