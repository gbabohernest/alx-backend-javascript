export default function divideFunction(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Invalid types');
  }
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}
