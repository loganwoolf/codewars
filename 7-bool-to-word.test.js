const { boolToWord } = require('./7-bool-to-word');

describe('Function boolToWord', () => {
  it('should return "Yes" if truthy', () => {
    expect(boolToWord(true)).toBe('Yes');
  });
  it('should return "No" if falsy', () => {
    expect(boolToWord(false)).toBe('No');
  });
});
