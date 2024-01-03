const { noSpace } = require('./8-removeStringSpaces');

describe('Function noSpace', () => {
  it('should return string when no spaces', () => {
    expect(noSpace('incorrigible')).toBe('incorrigible');
  });
  it('should return correct string when starting with a space', () => {
    expect(noSpace(' incorrigible')).toBe('incorrigible');
  });
  it('should return correct string when ending with a space', () => {
    expect(noSpace('incorrigible ')).toBe('incorrigible');
  });
  it('should return correct string when spaces are randomly added', () => {
    expect(noSpace('inc orr i gi   ble')).toBe('incorrigible');
  });
});
