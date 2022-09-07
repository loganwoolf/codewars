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

function buildRails(code, numberRails) {
  const outputArr = [];

  const cycle = 2 * numberRails - 2;
  const extraCount = (code.length - 1) % cycle;

  const railLength = Math.ceil(code.length / cycle) - 1;
  let highChecker = numberRails - 1;
  let lowChecker = highChecker;
  let sliceIndex = code.length;

  for (let rail = numberRails - 1; rail > 0; rail--) {
    let sliceLength = railLength;
    if (railLength === 0) {
      if (extraCount >= lowChecker) {
        sliceLength += 1;
      }
      if (rail < numberRails - 1) {
        sliceLength -= 1;
        if (lowChecker <= extraCount) {
          sliceLength += 1;
        }
        if (extraCount >= highChecker) {
          sliceLength += 1;
        }
      }
    } else {
      if (rail < numberRails - 1) {
        sliceLength += 1;
        if (lowChecker <= extraCount) {
          sliceLength += 1;
        }
      }
      if (extraCount >= highChecker) {
        sliceLength += 1;
      }
    }

    outputArr.unshift(code.slice(sliceIndex - sliceLength, sliceIndex));

    sliceIndex -= sliceLength;
    highChecker += 1;
    lowChecker -= 1;
  }
  outputArr.unshift(code.slice(0, sliceIndex));

  return outputArr;
}

// function decodeRailFenceCipher(string, numberRails) {

// }

module.exports = {
  encodeRailFenceCipher,
  splitToRails,
  buildRails,
  // decodeRailFenceCipher,
};
