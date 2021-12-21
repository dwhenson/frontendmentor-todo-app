import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

/**
 * Capture completed status of todo based on checked attribute
 * @param      {object}  event   The event object
 */
export function complete(event) {
  // Get items from localStorage if they exist, otherwise use todos
  const itemsToRender = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  // Get the todo based on unique id, and update completed value in todo array
  const todo = itemsToRender.find((todo) => todo.id === event.target.id);
  event.target.checked ? (todo.completed = true) : (todo.completed = false);
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(itemsToRender));
  displayTodos(itemsToRender);
}
