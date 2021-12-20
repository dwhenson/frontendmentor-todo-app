let dragSourceElement;

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

function addEventsDragAndDrop(element) {
  element.addEventListener("dragstart", dragStart, false);
  element.addEventListener("dragenter", dragEnter, false);
  element.addEventListener("dragover", dragOver, false);
  element.addEventListener("dragleave", dragLeave, false);
  element.addEventListener("drop", dragDrop, false);
  element.addEventListener("dragend", dragEnd, false);
}

export function dragTodos() {
  var listItens = document.querySelectorAll("[draggable]");
  Array.prototype.forEach.call(listItens, function (item) {
    addEventsDragAndDrop(item);
  });
}
