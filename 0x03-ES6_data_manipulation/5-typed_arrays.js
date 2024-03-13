export default (length, position, value) => {
  if (position >= length) {
    throw new Error('Position is out of bonds');
  }
  
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer = setUint8(position, value);
  return buffer;
};
