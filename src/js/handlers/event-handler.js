import { add } from "./../app/add-todos";
import { remove } from "./../app/remove-todos";
import { toggle } from "./../app/toggle-todos";

export function eventHandler(event) {
  if (event.target.dataset.function === "add") {
    add();
  }
  if (event.target.dataset.function === "remove") {
    remove(event);
  }
  if (event.target.dataset.function === "toggle") {
    toggle();
  }
}
