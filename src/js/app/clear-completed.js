import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

/**
 * Clear completed todos
 */
export function clear() {
  // Get items from localStorage if they exist, otherwise use todos
  const itemsToRender = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  // Iterate over array, if completed remove and call function again
  const filteredTodos = itemsToRender.filter((todo) => !todo.completed);
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(filteredTodos));
  displayTodos(filteredTodos);
}
