import { todos } from "./../helpers/elements";
import { displayTodos } from "./display-todos";

export function filterTodos(target) {
  if (target === "completed") {
    const completed = todos.filter((todo) => todo.completed);
    displayTodos(completed);
  }
  if (target === "remaining") {
    const remaining = todos.filter((todo) => !todo.completed);
    displayTodos(remaining);
  }
}
