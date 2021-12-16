export function randomId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .slice(2, 12);
}
