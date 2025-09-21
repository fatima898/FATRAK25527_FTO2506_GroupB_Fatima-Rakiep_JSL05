/**
 * @file taskManager.js
 * @description Task-level operations: load all tasks, add task, compute next ID.
 */

import { loadTasksFromStorage, saveTasksToStorage } from "../utils/localStorage.js";

/**
 * Load all tasks (source of truth).
 * @returns {Array<Object>}
 */
export function loadAllTasks() {
  return loadTasksFromStorage();
}

/**
 * Get next available numeric id for a new task.
 * @param {Array<Object>} tasks
 * @returns {number}
 */
function getNextId(tasks) {
  if (!tasks.length) return 1;
  return Math.max(...tasks.map(t => t.id)) + 1;
}

/**
 * Add a new task and persist to storage.
 * @param {{title:string,description:string,status:string}} taskData
 * @returns {Array<Object>} updated tasks
 */
export function addTask(taskData) {
  const tasks = loadTasksFromStorage();
  const newTask = {
    id: getNextId(tasks),
    title: taskData.title,
    description: taskData.description || "",
    status: taskData.status || "todo"
  };
  tasks.push(newTask);
  saveTasksToStorage(tasks);
  return tasks;
}

/**
 * Update an existing task.
 * @param {Object} updatedTask - Task object with updated data.
 */
export function updateTask(updatedTask) {
  const index = tasks.findIndex(t => t.id === updatedTask.id);
  if (index !== -1) {
    tasks[index] = updatedTask;
    saveTasksToLocalStorage(tasks);
    renderTasks();
  }
}
