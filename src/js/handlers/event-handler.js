import { add } from "./../app/add-todos";
import { remove } from "./../app/remove-todos";
import { toggle } from "./../app/toggle-todos";
import { clear } from "./../app/clear-completed";

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
}
