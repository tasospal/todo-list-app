export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface TaskFormProps {
  addTask: (task: Task) => void;
}

export interface TaskListProps {
  tasks: Task[];
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

export interface TaskFilterProps {
  filter: "All" | "Completed" | "Pending";
  setFilter: (filter: "All" | "Completed" | "Pending") => void;
}
