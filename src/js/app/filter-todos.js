import { todos } from "./../helpers/elements";
import { displayTodos } from "./display-todos";

/**
 * Filter todos shown based on completed starus
 * @param      {string}  target  The value to filter by (from button)
 */
export function filterTodos(target) {
  // Get items from localStorage if they exist, otherwise use todos
  const filteredTodos = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;

  const buttons = document.querySelectorAll(".filters-wrapper button");

  for (const button of buttons) {
    if (button.classList.contains("js-active")) {
      button.classList.remove("js-active");
    }
  }

  for (const button of buttons) {
    if (target === button.dataset.function) {
      button.classList.add("js-active");
    }
  }

  if (target === "completed") {
    displayTodos(filteredTodos, "completed");
  }
  if (target === "remaining") {
    displayTodos(filteredTodos, "remaining");
  }
  if (target === "all") {
    displayTodos(filteredTodos);
  }
}
