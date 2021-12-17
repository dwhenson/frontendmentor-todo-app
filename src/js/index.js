import { todos } from "./helpers/elements";
import { eventHandler } from "./handlers/event-handler";
import { displayTodos } from "./app/display-todos";

document.addEventListener("click", eventHandler);
document.addEventListener("change", eventHandler);
// document.addEventListener("dragstart", eventHandler);

displayTodos(todos);

// function dropHandler(event) {
//   event.preventDefault();
//   // Get the id of the target and add the moved element to the target's DOM
//   const data = event.dataTransfer.getData("text/plain");
//   event.target.append(document.getElementById(data));
// }
