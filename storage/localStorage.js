import { initialTasks } from "../../initialData.js";

/**
 * Loads tasks from localStorage or initializes with initialTaskstasks.
 * @returns {Array<Object>} The array of tasks.
 */
export function loadTasksFromStorage() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (error) {
            console.error("Error parsing tasks from localStorage:", error);
        }
    }

 // If there's no tasks in storage, initialize with initialTasks
localStorage.setItem("tasks", JSON.stringify(initialTasks));
return initialTasks;
}

/**
 * Save the given task array to localStorage.
 * @param {Array<Object>} tasks - The array of tasks to save.
 */
export function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
