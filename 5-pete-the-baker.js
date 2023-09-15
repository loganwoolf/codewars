const cakes = (recipe, available) => {
  for (const ingredient in recipe) {
    return available.hasOwnProperty(ingredient)
      ? Math.floor(available[ingredient] / recipe[ingredient])
      : 0;
  }
};

module.exports = { cakes };
