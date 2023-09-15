const { number } = require('./7-people-in-bus');

describe('Function computeNumber', () => {
  it('should return correct number with one stop', () => {
    expect(number([[2,2]])).toEqual(0);
    expect(number([[2,3]])).toEqual(-1);
    expect(number([[4,3]])).toEqual(1);
  });
  it('should return correct number with two stops', () => {
    expect(number([[2,2], [3,3]])).toEqual(0);
    expect(number([[2,3], [3,3]])).toEqual(-1);
    expect(number([[4,3], [3,3]])).toEqual(1);
  });
});
