import { todos, addInput } from "./../helpers/elements";
import { randomId } from "./../helpers/random-id";
import { displayTodos } from "./../app/display-todos";

/**
 * Add todo to the array
 */
export function add() {
  const initialTodoText = addInput.value.trim();
  // If value exsits, add to array with default values, and clear input
  if (!initialTodoText) return;
  todos.push({ todoText: initialTodoText, completed: false, id: randomId() });
  addInput.value = "";
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(todos));
  displayTodos(todos);
}
