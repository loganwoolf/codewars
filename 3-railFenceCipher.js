function splitToRails(string, numberRails) {
  const outputArr = [];
  for (let i = 0; i < numberRails; i++) {
    outputArr.push([]);
  }
  const cycle = 2 * numberRails - 2 || 1;
  for (let i = 0; i < string.length; i++) {
    const order = i % cycle;
    let row = order;
    if (order > cycle / 2) {
      row = cycle - order;
    }
    // @ts-ignore
    outputArr[row].push(string[i]);
  }
  return outputArr;
}

function encodeRailFenceCipher(string, numberRails) {
  return splitToRails(string, numberRails).reduce(
    (acc, item) => acc.concat(item.join('')),
    '',
  );
}

function decodeRailFenceCipher(string, numberRails) {
  // code
}

module.exports = {
  encodeRailFenceCipher,
  splitToRails,
  decodeRailFenceCipher,
};
