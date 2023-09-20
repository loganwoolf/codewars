const { countChars } = require('./6-countCharacters');

describe('function countChars', () => {
  it('empty string => empty object literal', () => {
    expect(countChars('')).toMatchObject({});
  });
  it('should find all letters', () => {
    expect(countChars('abc')).toHaveProperty('a');
    expect(countChars('abc')).toHaveProperty('b');
    expect(countChars('abc')).toHaveProperty('c');
  });
  it('should count letters correctly', () => {
    expect(countChars('rabbcrrr')).toMatchObject({ a: 1, c: 1, r: 4, b: 2 });
  });
});
