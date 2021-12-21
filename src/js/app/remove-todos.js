import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

/**
 * Removes the specified todo
 * @param      {object}  event   The event object
 */
export function remove(event) {
  // Get the index of the todo to remove based on unique id
  const position = todos.findIndex((todo) => todo.id === event.target.dataset.id);
  // Remove the todo
  todos.splice(position, 1);
<<<<<<< HEAD
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(todos));
=======
>>>>>>> parent of 8591c9d... ✅ ADD: local storage of todos
  displayTodos(todos);
}
