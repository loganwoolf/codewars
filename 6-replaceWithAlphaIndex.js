function alphabetPosition(text) {
  const lowerText = text.toLowerCase();
  const collectorArray = [];
  const regex = /[a-z]/;
  for (const letter of lowerText) {
    if (regex.test(letter)) {
      collectorArray.push(letter.charCodeAt(0) - 96);
    }
  }
  return collectorArray.join(' ');
}

// eslint-disable-next-line no-console
console.log(alphabetPosition('ABYZabyz'));
