import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

export function remove(event) {
  const position = todos.findIndex(
    (todo) => todo.id === Number.parseInt(event.target.dataset.id, 10)
  );
  todos.splice(position, 1);
  displayTodos();
}
