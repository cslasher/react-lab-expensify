import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({
  expensesCount,
  hiddenExpensesCount,
  expensesTotal
}) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{expensesCount}</span>{' '}
        {expensesCount > 1 ? 'expenses' : 'expense'} totalling{' '}
        <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
      </h1>
      {hiddenExpensesCount === 1 && <h3>1 expense filtered...</h3>}
      {hiddenExpensesCount > 1 && (
        <h3>{hiddenExpensesCount} expenses filtered...</h3>
      )}
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add Expenses
        </Link>
      </div>
    </div>
  </div>
);
const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    hiddenExpensesCount: state.expenses.length - visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
