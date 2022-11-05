/* eslint-disable no-unused-vars */
const {
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
} = require('./5-mathWithFunctions');

describe('module mathWithFunctions', () => {
  describe('when there is no operator yet', () => {
    it('numbers return themselves in an object', () => {
      expect(four()).toMatchObject({ num: 4 });
    });
  });
  describe('when calling operator function for first time', () => {
    it('returns the first number and the operation to call', () => {
      expect(plus(four())).toMatchObject({ num: 4, op: '+' });
      expect(minus(four())).toMatchObject({ num: 4, op: '-' });
      expect(times(four())).toMatchObject({ num: 4, op: '*' });
      expect(dividedBy(four())).toMatchObject({ num: 4, op: '/' });
    });
  });
  it('composes functions to do math', () => {
    expect(four(plus(four()))).toBe(8);
    expect(four(minus(five()))).toBe(-1);
    expect(six(times(five()))).toBe(30);
    expect(eight(dividedBy(three()))).toBe(2);
    expect(nine(dividedBy(three()))).toBe(3);
  });
});
