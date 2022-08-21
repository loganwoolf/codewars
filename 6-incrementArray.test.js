const upArray = require('./6-incrementArray');

describe('Behavior Checks', () => {
  test('Rolls over a single digit', () => {
    expect(upArray([2])).toStrictEqual([3]);
  });
  test('Rolls over zero', () => {
    expect(upArray([0])).toStrictEqual([1]);
  });

  test('Carries the last one for a single digit', () => {
    expect(upArray([9])).toStrictEqual([1, 0]);
  });

  test('Carries the last one for multiple digits', () => {
    expect(upArray([9, 9, 9, 9, 9])).toStrictEqual([1, 0, 0, 0, 0, 0]);
  });
});

describe('Error checks', () => {
  test('Return null if last number negative', () => {
    expect(upArray([6, 2, 4, -7])).toBeNull();
  });

  test('Return null if given empty array', () => {
    expect(upArray([])).toBeNull();
  });

  test('Return null if any number is negative', () => {
    expect(upArray([1, 3, -4, 1, 5])).toBeNull();
  });

  test('Return null if any number is over 9', () => {
    expect(upArray([1, 6, 18, 1, 5])).toBeNull();
  });
});
