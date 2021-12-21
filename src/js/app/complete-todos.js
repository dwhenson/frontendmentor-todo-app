import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

/**
 * Capture completed status of todo based on checked attribute
 * @param      {object}  event   The event object
 */
export function complete(event) {
  // Get the todo based on unique id, and update completed value in todo array
  const todo = todos.find((todo) => todo.id === event.target.id);
  event.target.checked ? (todo.completed = true) : (todo.completed = false);
<<<<<<< HEAD
  // Update local storage and rendered content
  console.log(todos);
  localStorage.setItem("savedTodos", JSON.stringify(todos));
=======
>>>>>>> parent of 8591c9d... ✅ ADD: local storage of todos
  displayTodos(todos);
}
