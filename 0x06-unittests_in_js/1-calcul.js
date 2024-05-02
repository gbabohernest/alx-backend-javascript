const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  const typeValue = type.toUpperCase();
  switch (typeValue) {
    case 'SUM':
      return roundedA + roundedB;

    case 'SUBTRACT':
      return roundedA - roundedB;

    case 'DIVIDE':
      if (roundedB === 0) {
        return new Error('Error');
      }
      return roundedA / roundedB;

    default:
      throw new Error('Unknown operation');
  }
};

module.exports = calculateNumber;
