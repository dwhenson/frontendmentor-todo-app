import { todos } from "./../helpers/elements";
import { add } from "./../app/add-todos";
import { remove } from "./../app/remove-todos";
import { toggle } from "./../app/toggle-todos";
import { clear } from "./../app/clear-completed";
import { filterTodos } from "./../app/filter-todos";
import { displayTodos } from "../app/display-todos";

export function eventHandler(event) {
  const target = event.target.dataset.function;
  if (!target) return;

  if (target === "add") {
    add();
  }
  if (target === "remove") {
    remove(event);
  }
  if (target === "toggle") {
    toggle(event);
  }
  if (target === "clear") {
    clear();
  }
  if (target === "all") {
    displayTodos(todos);
  }
  if (target === "remaining" || target === "completed") {
    filterTodos(target);
  }
}
