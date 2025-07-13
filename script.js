// Select DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Task array
let tasks = [];

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText
  };

  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

// Delete task by ID
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Render tasks to the UI
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;
    taskSpan.classList.add("task-text");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Event Listeners
addBtn.addEventListener("click", addTask);

// Allow pressing Enter to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
