/**
 * @file renderTasks.js
 * @description Renders tasks into the three status columns.
 */

import { createTaskElement } from "./taskElement.js";

/**
 * Render tasks into the DOM. Clears columns first.
 * @param {Array<Object>} tasks
 */
export function renderAllTasks(tasks) {
  // clear
  document.querySelectorAll(".tasks-container").forEach(c => (c.innerHTML = ""));

  if (!Array.isArray(tasks) || tasks.length === 0) return;

  tasks.forEach(task => {
    const column = document.getElementById(`${task.status}-tasks`);
    if (column) {
      column.appendChild(createTaskElement(task));
    } else {
      console.warn(`No DOM container for status "${task.status}".`);
    }
  });
}
