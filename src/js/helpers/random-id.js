/**
 * Generates a random id for each todo
 * @return     {string}  A string to be used as the id
 */
export function randomId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .slice(2, 12);
}
