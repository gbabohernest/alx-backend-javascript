export default (length, position, value) => {
  if (position < 0 || position >= length) {
      throw new Error('Position is out of bonds');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;
  return new DataView(buffer);
}
