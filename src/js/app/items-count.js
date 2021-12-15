import { todos, itemsLeft } from "./../helpers/elements";

export function itemsCount() {
  const count = todos.filter((todo) => todo.completed === false).length;
  itemsLeft.textContent = count;
}
