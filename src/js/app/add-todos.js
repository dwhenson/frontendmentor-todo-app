import { todos, addInput } from "./../helpers/elements";
import { randomId } from "./../helpers/random-id";
import { displayTodos } from "./../app/display-todos";

/**
 * Add todo to the array
 */
export function add() {
  const itemsToRender = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  const initialTodoText = addInput.value.trim();
  // If value exsits, add to array with default values, and clear input
  if (!initialTodoText) return;
  itemsToRender.push({ todoText: initialTodoText, completed: false, id: randomId() });
  addInput.value = "";
  // Update local storage and rendered content
  localStorage.setItem("savedTodos", JSON.stringify(itemsToRender));
  displayTodos(itemsToRender);
}
