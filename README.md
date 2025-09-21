# JSL05 Project Brief: Task Board with Local Storage Persistence and Task Creation

## Prerequisite

1. Before starting this challenge, ensure that you have **correctly populated your DOM elements** as per the solution in JSL04. Additionally, ensure that clicking a task should **open the modal with the relevant task details** as required in the previous challenge.
2. **Check the project user stories in your student dashboard**, make sure you understand what is required for each feature.

## Overview

In this project, you will implement a task management system where **tasks are persisted in local storage**, ensuring that tasks remain available even after refreshing the page or reopening the application. Users will be able to **add new tasks**, with the task details being **stored in local storage** and displayed in the appropriate **columns** ("To Do", "Doing", "Done"). The application should also include an **Add Task** modal for creating new tasks.

## Key Objectives

### Persistent Task Storage & Retrieval

- **Save tasks to local storage**: On page load, the application should **load tasks** from local storage so that the latest task list is available, even after a refresh.
- Ensure that **tasks are saved in local storage** every time a new task is added so that tasks persist after the page refreshes.
- **Load tasks** from local storage on startup, so users can see the latest tasks without manually re-entering them.
- Tasks should be categorized correctly into their respective columns (e.g., "To Do", "Doing", "Done") based on their **status** when loaded from local storage.

### Task Creation & Modal Interaction

- Provide an **"Add Task" button** that, when clicked, opens a **modal** for creating a new task.
- The modal should include:
  - Fields for entering the **task title** and **description**.
  - A dropdown to select the task **status** ("To Do", "Doing", "Done").
  - A **submit button** to add the new task to the task board immediately.
- After submitting, the task should appear on the board without requiring a page refresh.

## Design & Responsiveness

- The **"Add New Task" modal** should match the [Figma design](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=NNqgDPlU1PNLLh8i-0), including mobile-responsive behavior.
- Ensure that the modal and task board are **fully responsive** and function properly on both desktop and mobile devices.
- The "Add Task" button should **transform** appropriately on mobile devices to match the Figma design.

## Code Structure & Maintainability

- **Modularize your JavaScript code**: Break your code into separate modules, each handling a **single responsibility** (e.g., local storage handling, task rendering, modal management).
- Use **descriptive variable and function names** to ensure the code is clear and easy to maintain.
- Include **JSDoc comments** for every major function and module to describe their functionality, parameters, and return values.

## Expected Outcome

A fully functional task management system where tasks are dynamically loaded from **local storage**, tasks can be **added through a modal**, and the application **remains consistent** after refreshing the page. The code will be modular, well-documented, and easy to maintain, following best practices for JavaScript development.

# 🚀 Task Management System

A fully functional task management web application that allows users to organise their daily tasks. Tasks are persisted in local storage, so that they remain available even after refreshing the page. The application offers an interface where users can add, update and view tasks in different catergories (todo, doing and done.)

## ✅ Project Desripction 

- add tasks to the board through modal interface.
- organise tasks into 3 different catergories.
- persist tasks in loacl storage so that tasks are not lost after refreshing the page.

## ⚙️ Technologies Used

- HTML for building structure and content.
- CSS for styling the application.
- JavaScript for task logic, localStorage interaction and UI behaviour (modularised into sperate files for better maintainability.)
- Local Storage API for persisting tasks across page reloads.

## 🖼️ Features 

- Persist Task Storage: tasks are stored in localStorage, making them persist across page refreshering the apllication.
- Task Catergories: tasks can be organised into todo, doing and done columns.
- Add Tasks Modal: users can add tasks through a modal with input fields for/with title, description and status.
-Dynamic Task Rendering: tasks are dynamically rendered based on their status.
- Data Validation: ensures that users are provided valid data before submitting a task.

## 🛠️ Setup Instructions 

**Prerequisites** 
- Modern web browser (eg. Chrome, Firefox)

**Istallation Steps**
1. Clone the repository.
2. Navigate to the project directory.
3. Open the index.html file in your browser (double-click the index.html file)

## 🎨 Usage

1. Adding a Task
- Click on the `Add New Task` button in the top right corner.
- Fill in the task title, description and select a status from the dropdown.
- Press `Save` purple button to add the task to the board.

2. View Tasks By Status
- Tasks automatically catergorised into 3 columns (todo, doin and done.)

## 💻 Interaction 

1. **Clicking the `Add New Tasks` Button**
When you click on the `Add New Tasks` button, a modal is suppose to pop up, aloowing you to enter the task details. Once saved/submitted, the task will appear on the board based on its selected status.

2. **Task Catergories**
The tasks will be catergorised into 3 columns based on their status (todo, doing and done.)

3. **Modifying Tasks**
Users can interact with tasks in each catergory/column by clicking on them and modifying by means of editing or deleting tasks.

## NOTES 

having trouble with the modal actually becoming visible/opening when the `Add New Tasks` button is pressed.