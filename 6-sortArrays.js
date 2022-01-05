function sortme ( items ) {
  return items.sort( ( a, b ) => a.localeCompare(b, 'en', {sensitivity: 'base'}) )
}

console.log(sortItems(["C", "d", "a", "B"]))
console.log(sortItems(["Hello","there","I'm","fine"]))
console.log(sortItems(["CodeWars"]))
console.log(sortItems([]))