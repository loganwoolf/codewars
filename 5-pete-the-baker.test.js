const { cakes } = require('./5-pete-the-baker');

describe('Function cakes', () => {
  describe('1 ingredient', () => {
    it('returns 1 when just enough', () => {
      const recipe = { eggs: 4 };
      const available = { eggs: 4 };
      expect(cakes(recipe, available)).toBe(1);
    });
    it('returns 0 when not enough', () => {
      const recipe = { eggs: 6 };
      const available = { eggs: 5 };
      expect(cakes(recipe, available)).toBe(0);
    });
    it('returns how many could be made', () => {
      const recipe = { eggs: 8 };
      const available = { eggs: 31 };
      expect(cakes(recipe, available)).toBe(3);
    });
  });
});
