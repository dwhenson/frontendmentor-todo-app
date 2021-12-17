import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

export function remove(event) {
  const position = todos.findIndex((todo) => todo.id === event.target.dataset.id);
  todos.splice(position, 1);
  displayTodos(todos);
}
