"use client"

import { useEffect, useState } from "react";
import { getAllTasks, createTask, deleteTask, toggleTaskComplete } from "@/app/components/taskService";
import { Task } from "@/app/components/types/task";
import TaskItem from "@/app/components/TaskItem";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getAllTasks();
    setTasks(response);
  };

  const handleCreateTask = async () => {
    if (!newTask.title.trim()) return;
    await createTask({ ...newTask, completed: false });
    setNewTask({ title: "", description: "" });
    fetchTasks();
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleToggleComplete = async (task: Task) => {
    await toggleTaskComplete(task);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-2xl mx-auto bg-gray p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <button onClick={handleCreateTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
