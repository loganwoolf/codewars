/* eslint-disable no-console */
function sortme(items) {
  return items.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}

console.log(sortme(['C', 'd', 'a', 'B']));
console.log(sortme(['Hello', 'there', "I'm", 'fine']));
console.log(sortme(['CodeWars']));
console.log(sortme([]));
