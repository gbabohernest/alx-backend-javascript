const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 4 when adding 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when adding 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 6 when adding 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when adding 2.4999 and 3.4999', () => {
      expect(calculateNumber('SUM', 2.4999, 3.4999)).to.equal(5);
    });

    it('should return -1 when adding -3 and 2', () => {
      expect(calculateNumber('SUM', -3, 2)).to.equal(-1);
    });

    it('should return 3 when adding -2 and 5', () => {
      expect(calculateNumber('SUM', -2, 5)).to.equal(3);
    });

    it('should return -4 when adding -2 and -2', () => {
      expect(calculateNumber('SUM', -2, -2)).to.equal(-4);
    });

    it('should return 2 when adding -2.5 and 3.5', () => {
      expect(calculateNumber('SUM', -2.5, 3.5)).to.equal(2);
    });

    it('should return -4 when adding -2.5 and -2.5', () => {
      expect(calculateNumber('SUM', -2.5, -2.5)).to.equal(-4);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -2 when subtracting 3 from 1', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return 0 when subtracting 3.7 from 4', () => {
      expect(calculateNumber('SUBTRACT', 4, 3.7)).to.equal(0);
    });

    it('should return -4 when subtracting 4.5 from 1.4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 3 when subtracting -4.5 from -1.4', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('should return 4 when subtracting -1.5 from 2.5', () => {
      expect(calculateNumber('SUBTRACT', 2.5, -1.5)).to.equal(4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 2 when dividing 4 by 2', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should return 2 when dividing 6 by 3', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });

    it('should return -2 when dividing 6 by -3', () => {
      expect(calculateNumber('DIVIDE', 6, -3)).to.equal(-2);
    });
    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });

    it('should return 0.5 when dividing 4 by 8', () => {
      expect(calculateNumber('DIVIDE', 4, 8)).to.equal(0.5);
    });

    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
});
