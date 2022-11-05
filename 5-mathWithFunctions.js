const operation = {
  '+': plus,
  '-': minus,
  '*': times,
  '/': dividedBy,
};

const check = (a, num) => (a?.op ? operation[a.op](a.num, num) : { num });

const zero = (a) => {
  const num = 0;
  return check(a, num);
};
const one = (a) => {
  const num = 1;
  return check(a, num);
};
const two = (a) => {
  const num = 2;
  return check(a, num);
};
const three = (a) => {
  const num = 3;
  return check(a, num);
};
const four = (a) => {
  const num = 4;
  return check(a, num);
};
const five = (a) => {
  const num = 5;
  return check(a, num);
};
const six = (a) => {
  const num = 6;
  return check(a, num);
};
const seven = (a) => {
  const num = 7;
  return check(a, num);
};
const eight = (a) => {
  const num = 8;
  return check(a, num);
};
const nine = (a) => {
  const num = 9;
  return check(a, num);
};

function plus(a, b) {
  return a && b ? b + a : { ...a, op: '+' };
}
function minus(a, b) {
  return a && b ? b - a : { ...a, op: '-' };
}
function times(a, b) {
  return a && b ? b * a : { ...a, op: '*' };
}
function dividedBy(a, b) {
  return a && b ? Math.floor(b / a) : { ...a, op: '/' };
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
