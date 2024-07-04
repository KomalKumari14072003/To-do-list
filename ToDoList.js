const form = document.getElementById("todo-form");
const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");
let todoCount = 0;

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (newTodoInput.value.trim() === "") return;

  const newTodo = document.createElement("li");
  newTodo.textContent = `${todoCount + 1}. ${newTodoInput.value.trim()}`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", () => {
    newTodo.remove();
    todoCount--;
    reorderListItems();
  });

  newTodo.appendChild(removeBtn);
  todoList.appendChild(newTodo);
  newTodoInput.value = "";
  todoCount++;
});

function reorderListItems() {
  const listItems = todoList.children;
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].textContent = `${i + 1}. ${listItems[i].textContent.split(". ")[1]}`;
  }
}