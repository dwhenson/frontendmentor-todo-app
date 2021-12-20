/**
 * Updates the state of the todo based on the checked value
 * @param      {object}  todo    The todo HTML element
 * @return     {boolean}  The state of the todo checkbox
 */
export function updateCheckbox(todo) {
  return todo.completed ? "checked" : "";
}
