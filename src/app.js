import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const itemOne = store.dispatch(
  addExpense({ description: 'Water bill', amount: 1000, createdAt: 101 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 1000, createdAt: 111 })
);
store.dispatch(editExpense(itemOne.expense.id, { amount: 200 }));

store.dispatch(setTextFilter('water'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
