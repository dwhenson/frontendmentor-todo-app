import { todos } from "./../helpers/elements";
import { displayTodos } from "./display-todos";

/**
 * Filter todos shown based on completed starus
 * @param      {string}  target  The value to filter by (from button)
 */
export function filterTodos(target) {
  if (target === "completed") {
    displayTodos(todos, "completed");
  }
  if (target === "remaining") {
    displayTodos(todos, "remaining");
  }
}
