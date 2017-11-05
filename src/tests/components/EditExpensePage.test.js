import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixures/expenses';

let editExpense;
let startRemoveExpense;
let history;
let wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[2]}
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
