import { todos, itemsLeft } from "./../helpers/elements";

/**
 * Updates the number of items not completed in the todo array
 */
export function itemsCount() {
  // Get items from localStorage if they exist, otherwise use todos
  const itemsToCount = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  const count = itemsToCount.filter((todo) => todo.completed === false).length;
  itemsLeft.textContent = count;
}
