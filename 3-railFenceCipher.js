function encodeRailFenceCipher(string, numberRails) {
  // code
}

function decodeRailFenceCipher(string, numberRails) {
  // code
}

function splitToRails(string, numberRails) {
  const outputArr = [];
  for (let i = 0; i < numberRails; i++) {
    outputArr.push([]);
  }
  for (let i = 0; i < string.length; i++) {
    const cycle = 2 * numberRails - 2;
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

function formatRails(rails) {}

module.exports = {
  encodeRailFenceCipher,
  splitToRails,
  formatRails,
  decodeRailFenceCipher,
};
