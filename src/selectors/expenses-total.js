export default expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((sum, amount) => sum + amount, 0);
};
