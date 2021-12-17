import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

export function complete(event) {
  const todo = todos.find((todo) => todo.id === event.target.id);
  event.target.checked ? (todo.completed = true) : (todo.completed = false);
  displayTodos(todos);
}
