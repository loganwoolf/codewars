function iterPi(epsilon) {
  let divisor = 3;
  const operators = ['subtract', 'add'];
  let newQuarterPi = 1;
  let iterations = 0;

  while (epsilon < Math.abs(Math.PI - newQuarterPi * 4)) {
    if (operators[iterations % 2] === 'subtract') {
      newQuarterPi -= 1 / divisor;
    } else if (operators[iterations % 2] === 'add') {
      newQuarterPi += 1 / divisor;
    }
    divisor += 2;
    iterations += 1;
  }
  return [iterations + 1, +(newQuarterPi * 4).toFixed(10)];
}
// eslint-disable-next-line no-console
console.log(iterPi(0.0000000005));

// compute how many iterations of the algorithm it takes to achieve a
// certain (epsilon) precision of pi, and return that number and the
// pi calculation to ten decimal places in an array
