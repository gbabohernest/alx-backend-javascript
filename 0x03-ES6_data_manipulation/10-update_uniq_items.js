export default (groceryMap) => {
  if (groceryMap instanceof Map) {
    // const updatedList = new Map();
    for (const [key, value] of groceryMap.entries()) {
      groceryMap.set(key, value === 1 ? 100 : value);
    }
    return groceryMap;
  }
  throw new Error('Cannot process');
};
