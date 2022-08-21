const snail = require('./4-snail');

test('Returns empty array if receiving empty matrix', () => {
  expect(snail([[]])).toEqual([]);
});
describe('Square matrices', () => {
  test('Returns correct array if receiving 2x2 matrix', () => {
    expect(
      snail([
        [1, 2],
        [4, 3],
      ]),
    ).toEqual([1, 2, 3, 4]);
  });

  test('Returns correct array if receiving 3x3 matrix', () => {
    expect(
      snail([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('Returns correct array if receiving 4x4 matrix', () => {
    expect(
      snail([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });
});
describe('Rectangular matrices', () => {
  test('Returns correct array if receiving 5x1 matrix', () => {
    expect(snail([[1], [2], [3], [4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });
  test('Returns correct array if receiving 4x5 matrix', () => {
    expect(
      snail([
        [1, 2, 3, 4, 9],
        [12, 13, 14, 5, 9],
        [11, 16, 15, 6, 9],
        [10, 9, 8, 7, 9],
      ]),
    ).toEqual([
      1, 2, 3, 4, 9, 9, 9, 9, 7, 8, 9, 10, 11, 12, 13, 14, 5, 6, 15, 16,
    ]);
  });
});
