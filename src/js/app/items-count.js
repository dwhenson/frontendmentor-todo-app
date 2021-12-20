import { todos, itemsLeft } from "./../helpers/elements";

/**
 * Updates the number of items not completed in the todo array
 */
export function itemsCount() {
  const count = todos.filter((todo) => todo.completed === false).length;
  itemsLeft.textContent = count;
}
