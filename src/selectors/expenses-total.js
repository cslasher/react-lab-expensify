export default expenses =>
  expenses
    .map(expense => expense.amount)
    .reduce((sum, amount) => sum + amount, 0);
