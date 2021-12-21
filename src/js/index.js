import { todos } from "./helpers/elements";
import { eventHandler } from "./handlers/event-handler";
import { displayTodos } from "./app/display-todos";

document.addEventListener("click", eventHandler);
document.addEventListener("change", eventHandler);

const itemsToRender = JSON.parse(!!localStorage.getItem("savedTodos"))
  ? JSON.parse(localStorage.getItem("savedTodos"))
  : todos;

// Render default list of todos
displayTodos(itemsToRender);
