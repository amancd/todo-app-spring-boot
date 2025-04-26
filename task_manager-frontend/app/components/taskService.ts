// services/taskService.ts
import axios from "axios";
import { Task } from "./types/task";

const API_URL = "http://localhost:8080/api/tasks";

export const getAllTasks = async () => {
  const response = await axios.get<Task[]>(API_URL);
  return response.data;
};

export const createTask = async (task: Omit<Task, "id">) => {
  await axios.post(API_URL, task);
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const toggleTaskComplete = async (task: Task) => {
  await axios.put(`${API_URL}/${task.id}`, { ...task, completed: !task.completed });
};
