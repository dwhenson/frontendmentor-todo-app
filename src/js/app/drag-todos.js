import { displayTodos } from "./../app/display-todos";

/**
 * Returns a local storage representation of the reorderd todo list
 */
function toLocalStorage() {
  // Clear localStorage
  localStorage.removeItem("savedTodos");
  // Get updated order
  const reOrderedTodos = [...document.querySelectorAll("[draggable]")];
  // Save key data to new array
  const todosToSave = [];
  reOrderedTodos.map((todo) => {
    todosToSave.push({
      todoText: todo.querySelector("label").textContent,
      completed: todo.querySelector("input").checked,
      id: todo.dataset.id,
    });
  });
  displayTodos(todosToSave);
  localStorage.setItem("savedTodos", JSON.stringify(todosToSave));
}

// Holds the value of the element being dragged
let dragSourceElement;

/* Functions fired on different parts of the drag-drop API
/* ==================================================== */
function dragStart(event) {
  this.style.opacity = "0.4";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", this.outerHTML);
  dragSourceElement = this;
}

function dragOver(event) {
  event.preventDefault();
  this.classList.add("over");
  event.dataTransfer.dropEffect = "move";
  return false;
}

function dragLeave(event) {
  this.classList.remove("over");
}

function dragDrop(event) {
  event.stopPropagation(); // Stops some browsers from redirecting.

  if (dragSourceElement !== this) {
    dragSourceElement.remove();
    const dropHTML = event.dataTransfer.getData("text/html");
    this.insertAdjacentHTML("beforebegin", dropHTML);
    const dropElement = this.previousSibling;
    addEventsDragAndDrop(dropElement);
  }
  this.classList.remove("over");
  return false;
}

function dragEnd(event) {
  this.classList.remove("over");
  this.style.opacity = "1";
  toLocalStorage();
}

/**
 * Adds all necessary drag and drop events to the li listItems
 * @param {object}  element  The element to add the listeners to
 */
function addEventsDragAndDrop(element) {
  element.addEventListener("dragstart", dragStart, false);
  element.addEventListener("dragover", dragOver, false);
  element.addEventListener("dragleave", dragLeave, false);
  element.addEventListener("drop", dragDrop, false);
  element.addEventListener("dragend", dragEnd, false);
}

/**
 * Enables todo items to be draggable
 */
export function dragTodos() {
  const todoList = [...document.querySelectorAll("[draggable]")];
  for (const todo of todoList) {
    addEventsDragAndDrop(todo);
  }
}
