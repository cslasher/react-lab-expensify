import expensesReducer from '../../reducers/expenses';
import expenses from '../fixures/expenses';

test('should set default state', () => {
  const action = { type: '@@INIT' };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-1' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const expense = {
    id: '0',
    description: 'Games',
    amount: 20000,
    note: '',
    createdAt: 12312
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const text = 'Test';
  const updates = { text };
  const action = { type: 'EDIT_EXPENSE', id: '2', updates };
  const state = expensesReducer(expenses, action);
  expect(state[1].text).toBe(text);
});

test('should not edit an expense if id not found', () => {
  const text = 'Test';
  const updates = { text };
  const action = { type: 'EDIT_EXPENSE', id: '-1', updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = { type: 'SET_EXPENSES', expenses };
  const state = expensesReducer({}, action);
  expect(state).toEqual(expenses);
});
