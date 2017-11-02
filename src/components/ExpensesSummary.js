import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = props => {
  const count = props.expenses.length;
  if (count >= 1) {
    return (
      <div>
        <p>
          Viewing {count} {count > 1 ? 'expenses' : 'expense'} totalling{' '}
          {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}
        </p>
      </div>
    );
  }
  return '';
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
