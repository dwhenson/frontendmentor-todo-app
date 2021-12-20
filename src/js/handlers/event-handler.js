import { todos } from "./../helpers/elements";
import { add } from "./../app/add-todos";
import { remove } from "./../app/remove-todos";
import { complete } from "./../app/complete-todos";
import { clear } from "./../app/clear-completed";
import { filterTodos } from "./../app/filter-todos";
import { displayTodos } from "../app/display-todos";
import { editTodos } from "../app/edit-todos";
import { dragTodos } from "../app/drag-todos";

/**
 * Handles all the events and calls relavent functions
 * @param      {object}  event   The event object
 */
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
    complete(event);
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
  if (target === "edit") {
    editTodos(event);
  }
}
