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
      expect(minus(zero())).toMatchObject({ num: 0, op: '-' });
      expect(times(six())).toMatchObject({ num: 6, op: '*' });
      expect(dividedBy(nine())).toMatchObject({ num: 9, op: '/' });
    });
  });
  describe('composing functions to do math', () => {
    it('uses zero correctly', () => {
      expect(zero(times(three()))).toBe(0);
      expect(zero(minus(three()))).toBe(-3);
      expect(zero(dividedBy(three()))).toBe(0);
      expect(nine(dividedBy(zero()))).toBe(Infinity);
      expect(zero(dividedBy(zero()))).toBeNaN();
    });
    it('adds correctly', () => {
      expect(four(plus(four()))).toBe(8);
    });
    it('subtracts correctly', () => {
      expect(four(minus(five()))).toBe(-1);
    });
    it('multiplies correctly', () => {
      expect(six(times(five()))).toBe(30);
    });
    it('divides correctly', () => {
      expect(eight(dividedBy(three()))).toBe(2);
      expect(nine(dividedBy(three()))).toBe(3);
    });
  });
});
