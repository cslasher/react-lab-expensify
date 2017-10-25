import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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

store.dispatch(
  addExpense({ description: 'Water bill', amount: 1000, createdAt: 101 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 500, createdAt: 511 })
);
store.dispatch(
  addExpense({ description: 'Rent', amount: 10000, createdAt: 403 })
);
// store.dispatch(editExpense(itemOne.expense.id, { amount: 200 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
