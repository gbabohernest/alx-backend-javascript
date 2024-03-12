export default (set, array) => {
  const hasArrayValues = array.every((element) => set.has(element));
  return hasArrayValues;
};
