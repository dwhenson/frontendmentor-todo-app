import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

/**
 * Clear completed todos
 */
export function clear() {
  // Iterate over array, if completed remove and call function again
  for (const [index, todo] of todos.entries()) {
    if (todo.completed) {
      todos.splice(index, 1);
      clear();
    }
  }
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(todos));
  displayTodos(todos);
}
