import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

const ExpenseList = props => (
  <div>
    <h3> Expense List</h3>
    {props.expenses.map(item => <ExpenseListItem {...item} key={item.id} />)}
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
