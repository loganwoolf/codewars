const { enoughToMake, cakes } = require('./5-pete-the-baker');

describe('Function enoughToMake', () => {
  const pantry = { eggs: 4, bacon: 2, sausage: 8 };

  it('returns count when enough in pantry', () => {
    expect(enoughToMake(4, pantry.eggs)).toBe(1);
    expect(enoughToMake(3, pantry.eggs)).toBe(1);
  });

  it('returns 0 when not enough in pantry', () => {
    expect(enoughToMake(5, pantry.eggs)).toBe(0);
  });

  it('returns 0 when item not in pantry', () => {
    expect(enoughToMake(6, pantry.milk)).toBe(0);
  });

  it('returns how many could be made', () => {
    expect(enoughToMake(2, pantry.eggs)).toBe(2);
    expect(enoughToMake(1, pantry.eggs)).toBe(4);
  });
});

describe('Function cakes', () => {
  const recipe = { eggs: 2, bacon: 3, sausage: 4 };

  it('returns 1 when pantry matches recipe', () => {
    const pantry = { eggs: 2, bacon: 3, sausage: 4 };
    expect(cakes(recipe, pantry)).toBe(1);
  });

  it('returns 2 when pantry doubles recipe', () => {
    const pantry = { eggs: 4, bacon: 8, sausage: 12 };
    expect(cakes(recipe, pantry)).toBe(2);
  });

  it('returns 0 when pantry missing recipe item', () => {
    const pantry = { eggs: 4, bacon: 8, hotdogs: 5 };
    expect(cakes(recipe, pantry)).toBe(0);
  });
});
