export default () => {
  const groceriesListMap = new Map();
  const groceryItems = {
    Apple: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  /*for (const [name, quantity] of Object.entries(groceryItems)) {
    groceriesListMap.set(name, quantity);
  }*/
  const keys = Object.keys(groceryItems);
  keys.map((key) => groceriesListMap.set(key, groceryItems[key]));
  return groceriesListMap;
};
