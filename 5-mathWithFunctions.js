const operation = {
  '+': plus,
  '-': minus,
  '*': times,
  '/': dividedBy,
};

const passValues = (a, num) => (a?.op ? operation[a.op](num, a.num) : { num });

const checkTruthyOrZero = (a, b) => (a || a === 0) && (b || b === 0);

const zero = (a) => {
  const num = 0;
  return passValues(a, num);
};
const one = (a) => {
  const num = 1;
  return passValues(a, num);
};
const two = (a) => {
  const num = 2;
  return passValues(a, num);
};
const three = (a) => {
  const num = 3;
  return passValues(a, num);
};
const four = (a) => {
  const num = 4;
  return passValues(a, num);
};
const five = (a) => {
  const num = 5;
  return passValues(a, num);
};
const six = (a) => {
  const num = 6;
  return passValues(a, num);
};
const seven = (a) => {
  const num = 7;
  return passValues(a, num);
};
const eight = (a) => {
  const num = 8;
  return passValues(a, num);
};
const nine = (a) => {
  const num = 9;
  return passValues(a, num);
};

function plus(a, b) {
  return checkTruthyOrZero(a, b) ? a + b : { ...a, op: '+' };
}
function minus(a, b) {
  return checkTruthyOrZero(a, b) ? a - b : { ...a, op: '-' };
}
function times(a, b) {
  return checkTruthyOrZero(a, b) ? a * b : { ...a, op: '*' };
}
function dividedBy(a, b) {
  return checkTruthyOrZero(a, b) ? Math.floor(a / b) : { ...a, op: '/' };
}

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
};
