import { todos } from "./../helpers/elements";
import { displayTodos } from "./display-todos";

<<<<<<< HEAD
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
=======
export function filterTodos(target) {
  if (target === "completed") {
    const completed = todos.filter((todo) => todo.completed);
    displayTodos(completed);
  }
  if (target === "remaining") {
    const remaining = todos.filter((todo) => !todo.completed);
    displayTodos(remaining);
>>>>>>> parent of 8591c9d... ✅ ADD: local storage of todos
  }
}
