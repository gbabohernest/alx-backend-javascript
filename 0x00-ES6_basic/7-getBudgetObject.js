export default function getBudgetObject(income, gdp, capita) {
  // Using ES6 shorthand property syntax to simplify object creation
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
