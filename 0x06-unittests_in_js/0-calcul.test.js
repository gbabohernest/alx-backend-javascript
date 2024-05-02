const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 5 when adding 2.4999 and 3.4999', () => {
    assert.strictEqual(calculateNumber(2.4999, 3.4999), 5);
  });

  it('should return 5 when adding 2.6 and 2.0', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should return -1 when adding -3 and 2', () => {
    assert.strictEqual(calculateNumber(-3, 2), -1);
  });

  it('should return 3 when adding -2 and 5', () => {
    assert.strictEqual(calculateNumber(-2, 5), 3);
  });

  it('should return -3 when adding -5 and 2', () => {
    assert.strictEqual(calculateNumber(-5, 2), -3);
  });

  it('should return -4 when adding -2 and -2', () => {
    assert.strictEqual(calculateNumber(-2, -2), -4);
  });

  it('should return 1 when adding -2.5 and 2.5', () => {
    assert.strictEqual(calculateNumber(-2.5, 2.5), 1);
  });

  it('should return -4 when adding -2.5 and -2.5', () => {
    assert.strictEqual(calculateNumber(-2.5, -2.5), -4);
  });
});
