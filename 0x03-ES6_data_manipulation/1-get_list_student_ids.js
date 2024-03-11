export default (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = array.map((id) => id.id);
  return ids;
};
