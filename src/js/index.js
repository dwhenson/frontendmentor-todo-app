import { eventHandler } from "./handlers/event-handler";
import { displayTodos } from "./app/display-todos";

document.addEventListener("click", eventHandler);
document.addEventListener("change", eventHandler);

displayTodos();
