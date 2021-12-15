import { todos } from "./../helpers/elements";

export function toggle(event) {
  const todo = todos.find((todo) => todo.id === Number.parseInt(event.target.id, 10));
  event.target.checked ? (todo.completed = true) : (todo.completed = false);
}
