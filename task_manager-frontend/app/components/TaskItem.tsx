// components/TaskItem.tsx
import { Task } from "./types/task";

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (task: Task) => void;
}

export default function TaskItem({ task, onDelete, onToggleComplete }: Props) {
  return (
    <li className="flex justify-between items-center p-4 border rounded">
      <div>
        <h2 className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h2>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggleComplete(task)}
          className="text-green-500 border border-green-500 px-2 py-1 rounded hover:bg-green-500 hover:text-white"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
