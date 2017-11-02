import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  if (expensesCount >= 1) {
    return (
      <div>
        <p>
          Viewing {expensesCount} {expensesCount > 1
            ? 'expenses'
            : 'expense'}{' '}
          totalling {numeral(expensesTotal / 100).format('$0,0.00')}
        </p>
      </div>
    );
  }
  return '';
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
