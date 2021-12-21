<<<<<<< HEAD
import { todos } from "./../helpers/elements";
/**
 * Returns a local storage representation of the reorderd todo list
 */
function toLocalStorage() {
  todos = [];
  localStorage.removeItem("savedTodos");
  var reOrderedTodos = [...document.querySelectorAll("[draggable]")];
  reOrderedTodos.map((todo) => {
    todos.push({
      todoText: todo.querySelector("label").textContent,
      completed: todo.querySelector("input").checked,
      id: todo.dataset.id,
    });
  });
  localStorage.setItem("savedTodos", JSON.stringify(todos));
  console.log(todos);
}

// Holds the value of the element being dragged
let dragSourceElement;

/* Functions fired on different parts of the drag-drop API
/* ==================================================== */

=======
let dragSourceElement;

>>>>>>> parent of 8591c9d... ✅ ADD: local storage of todos
function dragStart(event) {
  this.style.opacity = "0.4";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", this.innerHTML);
  dragSourceElement = this;
}

function dragEnter(event) {
  this.classList.add("over");
}

function dragLeave(event) {
  event.stopPropagation();
  this.classList.remove("over");
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  return false;
}

function dragDrop(event) {
  if (dragSourceElement !== this) {
    dragSourceElement.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData("text/html");
  }
  return false;
}

function dragEnd(event) {
  // var listItens = document.querySelectorAll("[draggable]");
  // Array.prototype.forEach.call(listItens, function (item) {
  //   item.classList.remove("over");
  // });
  const listItems = document.querySelectorAll("[draggable]");
  for (const item of listItems) {
    item.classList.remove("over");
  }
  this.style.opacity = "1";
}

/**
 * Adds all nexessary drag and drop events to the li listItems
 * @param {object}  element  The element to add the listeners to
 */
function addEventsDragAndDrop(element) {
  element.addEventListener("dragstart", dragStart, false);
  element.addEventListener("dragenter", dragEnter, false);
  element.addEventListener("dragover", dragOver, false);
  element.addEventListener("dragleave", dragLeave, false);
  element.addEventListener("drop", dragDrop, false);
  element.addEventListener("dragend", dragEnd, false);
}

/**
 * Enables todo items to be draggable
 */
export function dragTodos() {
  var listItens = document.querySelectorAll("[draggable]");
  Array.prototype.forEach.call(listItens, function (item) {
    addEventsDragAndDrop(item);
  });
}
