function alphabetPosition ( text ) {
  text = text.toLowerCase()
  let collectorArray = []
  const regex = /[a-z]/
  for (let letter of text) {
    if (regex.test(letter)) {
      collectorArray.push(letter.charCodeAt(0) - 96)
    }
  }
  return collectorArray.join(' ')
}

console.log(
  alphabetPosition("ABYZabyz")
)