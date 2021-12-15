import { todos, addInput } from "./../helpers/elements";
import { randomId } from "./../helpers/random-id";
import { displayTodos } from "./../app/display-todos";

export function add() {
  const initialTodoText = addInput.value;
  todos.push({ todoText: initialTodoText, completed: false, id: randomId() });
  addInput.value = "";
  displayTodos();
}
