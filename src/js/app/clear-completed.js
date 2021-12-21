import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";
import { itemsCount } from "./items-count";

/**
 * Clear completed todos
 */
export function clear() {
  const itemsToRender = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  // Iterate over array, if completed remove and call function again
  const filteredTodos = itemsToRender.filter((todo) => !todo.completed);
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(filteredTodos));
  displayTodos(filteredTodos);
}
