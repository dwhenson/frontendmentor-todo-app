import { todos, addInput } from "./../helpers/elements";
import { randomId } from "./../helpers/random-id";
import { displayTodos } from "./../app/display-todos";

export function add() {
  const initialTodoText = addInput.value.trim();
  if (!initialTodoText) return;
  todos.push({ todoText: initialTodoText, completed: false, id: randomId() });
  addInput.value = "";
  localStorage.setItem("savedTodos", JSON.stringify(todos));
  displayTodos(todos);
}
