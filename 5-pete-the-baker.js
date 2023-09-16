const enoughToMake = (ingredientQuantity, pantryItem) => {
  const enoughFor = pantryItem
    ? Math.floor(pantryItem / ingredientQuantity)
    : 0;
  return enoughFor;
};

const cakes = (recipe, pantry) => {
  let total = Infinity;
  for (const ingredient in recipe) {
    const count = enoughToMake(recipe[ingredient], pantry?.[ingredient]);
    if (!count) return 0;
    if (count < total) total = count;
  }
  return total;
};

module.exports = { enoughToMake, cakes };
