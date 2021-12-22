import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

/**
 * Removes the specified todo
 * @param      {object}  event   The event object
 */
export function remove(event) {
  const itemsToRender = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  // Get the index of the todo to remove based on unique id
  // const position = itemsToRender.findIndex((todo) => todo.id === event.target.dataset.id);
  const position = itemsToRender.findIndex((todo) => todo.id === event.target.closest("data-id"));
  // Remove the todo
  itemsToRender.splice(position, 1);
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(itemsToRender));
  displayTodos(itemsToRender);
}
