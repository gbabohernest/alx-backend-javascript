const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 4 when adding 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when adding 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 6 when adding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when adding 2.4999 and 3.4999', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4999, 3.4999), 5);
    });

    it('should return -1 when adding -3 and 2', () => {
      assert.strictEqual(calculateNumber('SUM', -3, 2), -1);
    });

    it('should return 3 when adding -2 and 5', () => {
      assert.strictEqual(calculateNumber('SUM',-2, 5), 3);
    });

    it('should return -4 when adding -2 and -2', () => {
      assert.strictEqual(calculateNumber('SUM', -2, -2), -4);
    });

    it('should return 2 when adding -2.5 and 3.5', () => {
      assert.strictEqual(calculateNumber('SUM', -2.5, 3.5), 2);
    });

    it('should return -4 when adding -2.5 and -2.5', () => {
      assert.strictEqual(calculateNumber('SUM', -2.5, -2.5), -4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -2 when subtracting 3 from 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return 0 when subtracting 3.7 from 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 3.7), 0);
    });

    it('should return -4 when subtracting 4.5 from 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 3 when subtracting -4.5 from -1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });

    it('should return 4 when subtracting -1.5 from 2.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, -1.5), 4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 2 when dividing 4 by 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should return 2 when dividing 6 by 3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });

    it('should return -2 when dividing 6 by -3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, -3), -2);
    });
    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });

    it('should return 0.5 when dividing 4 by 8', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 8), 0.5);
    });

    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
});
