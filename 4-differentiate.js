const differentiate = (polynomial, point) => {
  const terms = polynomial.split(/\+|-/);
  const operators = polynomial.split(/[^+|-]+/);
  if (terms[0] === '') {
    terms.shift();
  } else {
    operators[0] = '+';
  }
  operators.pop();

  return terms.reduce((acc, term, index) => {
    let negative = false;
    if (operators[index] === '-') {
      negative = true;
    }

    if (term.includes('x^')) {
      const num = term.split('x^');
      if (num[0] === '') {
        num[0] = 1;
      }
      const value = +num[0] * +num[1] * point ** (+num[1] - 1);
      return negative ? acc + value * -1 : acc + value;
    }

    if (term.includes('x')) {
      const num = term.split('x');
      if (num[0] === '') {
        num[0] = 1;
      }
      const value = +num[0];
      return negative ? acc + value * -1 : acc + value;
    }

    return acc;
  }, 0);
};

console.log(differentiate('-19x^2-15x+32', 3));

/**
 * Create a function that differentiates a polynomial for a given value of x.
 *
 * Your function will receive 2 arguments: a polynomial as a string, and a point to
 * evaluate the equation as an integer.
 *
 * Assumptions:
 * There will be a coefficient near each x, unless the coefficient equals 1 or -1.
 * There will be an exponent near each x, unless the exponent equals 0 or 1.
 * All exponents will be greater or equal to zero
 * Examples:
 * differenatiate("12x+2", 3)      ==>   returns 12
 * differenatiate("x^2+3x+2", 3)   ==>   returns 9
 */
