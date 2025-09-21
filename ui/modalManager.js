/**
 * @file modalManager.js
 * @description Handles the Add Task modal, View Task modal close behavior, and adding tasks.
 */

import { addTask } from "./tasks/taskmanager.js";
import { renderAllTasks } from "./renderTasks.js";
import { clearFormFields, getFormData, validateFormData } from "../tasks/formUtils.js";

/**
 * Setup modal behaviour and form submission.
 * Call once after DOM is ready.
 */

export function setupModal() {
  const addBtn = document.getElementById("open-modal-btn");
  const taskModal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const saveBtn = document.getElementById("modal-save");
  const viewModalClose = document.getElementById("view-modal-close");
  const viewModal = document.getElementById("view-task-modal");

  
  // open add modal
  addBtn?.addEventListener("click", () => {
    if (typeof taskModal.showModal === "function") taskModal.showModal();
    else taskModal.style.display = "block";
  });

  // close add modal
  closeBtn?.addEventListener("click", () => {
    if (typeof taskModal.close === "function") taskModal.close();
    else taskModal.style.display = "none";
  });

  // save button inside form (we also listen on form submit in main.js)
  saveBtn?.addEventListener("click", (e) => {
    // this handler keeps behaviour safe if saveBtn clicked directly
    const formData = getFormData();
    if (!validateFormData(formData)) {
      alert("Please fill in title and description.");
      return;
    }
    const updated = addTask(formData);
    renderAllTasks(updated);
    clearFormFields();
    if (typeof taskModal.close === "function") taskModal.close();
  });

  // view modal close
  viewModalClose?.addEventListener("click", () => {
    if (typeof viewModal.close === "function") viewModal.close();
    else viewModal.style.display = "none";
  });

  // close dialogs when clicking outside (for non-dialog fallback)
  window.addEventListener("click", (ev) => {
    if (ev.target === taskModal && typeof taskModal.close === "function") taskModal.close();
    if (ev.target === viewModal && typeof viewModal.close === "function") viewModal.close();
  });
}


