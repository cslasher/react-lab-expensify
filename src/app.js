import React from 'react';
import ReactDOM from 'react-dom';
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
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const itemOne = store.dispatch(
  addExpense({ description: 'Water bill', amount: 1000, createdAt: 101 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 1000, createdAt: 111 })
);
// store.dispatch(editExpense(itemOne.expense.id, { amount: 200 }));

store.dispatch(setTextFilter('water'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
