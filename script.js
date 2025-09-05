const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const doneBtn = document.getElementById("done-btn");
const taskList = document.getElementById("task-list");
const summary = document.getElementById("summary");

let tasks = [];

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if(taskText === "") return;
  tasks.push(taskText);
  renderTasks();
  taskInput.value = "";
});

// Enter key adds task
taskInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") addBtn.click();
});

// Render task list
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task}`;
    taskList.appendChild(li);
  });
}

// Done button shows summary
doneBtn.addEventListener("click", () => {
  if(tasks.length === 0){
    summary.textContent = "No tasks added!";
    return;
  }
  taskList.style.display = "none";
  summary.innerHTML = `<h2>Today's To-Do Summary:</h2><ul>${tasks.map(t => `<li>${t}</li>`).join('')}</ul>`;
});
