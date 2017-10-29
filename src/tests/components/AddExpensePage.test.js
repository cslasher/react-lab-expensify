import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixures/expenses';

let addExpense;
let history;
let wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
