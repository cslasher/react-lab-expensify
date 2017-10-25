import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';

const store = configureStore();
let count = 0;
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  count += 1;
  console.log(`Store change ${count}: ${JSON.stringify(visibleExpenses)}`);
});

const itemOne = store.dispatch(
  addExpense({ description: 'Water bill', amount: 1000, createdAt: 101 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 1000, createdAt: 111 })
);
store.dispatch(editExpense(itemOne.expense.id, { amount: 200 }));

store.dispatch(setTextFilter('water'));
const state = store.getState();

ReactDOM.render(<AppRouter />, document.getElementById('app'));
