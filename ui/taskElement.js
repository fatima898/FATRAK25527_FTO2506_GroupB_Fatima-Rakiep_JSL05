/**
 * @file taskElement.js
 * @description Creates DOM element for a single task and wires the view modal.
 */

/**
 * Create a DOM element for a task.
 * @param {Object} task
 * @returns {HTMLElement}
 */
export function createTaskElement(task) {
  const el = document.createElement("div");
  el.className = "task-div";
  el.dataset.id = task.id;

  // maintain compact layout matching your CSS
  el.innerHTML = `
    <div class="task-content">
      <div class="task-title">${escapeHtml(task.title)}</div>
    </div>
  `;

  // open view modal on click
  el.addEventListener("click", () => {
    const viewModal = document.getElementById("view-task-modal");
    document.getElementById("view-title").textContent = task.title;
    document.getElementById("view-description").textContent = task.description || "";
    document.getElementById("view-status").textContent = task.status;
    // dialog.showModal if supported, otherwise fallback to style display
    if (typeof viewModal.showModal === "function") viewModal.showModal();
    else viewModal.style.display = "block";
  });

  return el;
}

/** Simple HTML escape to avoid injection from task titles/descriptions */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
