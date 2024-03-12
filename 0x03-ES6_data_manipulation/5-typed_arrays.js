export default (length, position, value) => {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new Error('Invalid type');
  }

  if (position < 0 || position >= length) {
    throw new Error('Position is out of bonds');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View.set([value], position);
  return new DataView(buffer);
};
