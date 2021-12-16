import { todos } from "./../helpers/elements";
import { displayTodos } from "./../app/display-todos";

export function clear() {
  for (const [index, todo] of todos.entries()) {
    if (todo.completed) {
      todos.splice(index, 1);
      clear();
    }
  }
  displayTodos(todos);
}
