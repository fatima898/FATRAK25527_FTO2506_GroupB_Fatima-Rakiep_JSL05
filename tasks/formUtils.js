/**
 * @file formUtils.js
 * @description Helpers for reading/validating/clearing the add task form.
 */

/**
 * Get the form input values from the task modal
 * @returns {{ title: string, description: string, status: string }}
 */
export function getFormData() {
  const title = document.getElementById('task-title').value.trim();
  const description = document.getElementById('task-desc').value.trim();
  const status = document.getElementById('task-status').value;
  return { title, description, status };
}

/**
 * Validate that form fields are filled in
 * @param {Object} formData
 * @returns {boolean}
 */
export function validateFormData({ title, description }) {
  return Boolean(title && description);
}

/**
 * Reset form fields after submission
 */
export function clearFormFields() {
  document.getElementById('task-title').value = '';
  document.getElementById('task-desc').value = '';
  document.getElementById('task-status').value = 'todo';
}
