import { todos } from "./../helpers/elements";
import { displayTodos } from "./display-todos";

/**
 * Filter todos shown based on completed starus
 * @param      {string}  target  The value to filter by (from button)
 */
export function filterTodos(target) {
  const filteredTodos = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  if (target === "completed") {
    displayTodos(filteredTodos, "completed");
  }
  if (target === "remaining") {
    displayTodos(filteredTodos, "remaining");
  }
}
