import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {
    amount: 300,
    note: 'New note value'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      amount: 300,
      note: 'New note value'
    }
  });
});

test('should setup add expense with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1023100,
    createdAt: 1000,
    note: 'Last payment.'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: 'Rent',
      amount: 1023100,
      createdAt: 1000,
      note: 'Last payment.',
      id: expect.any(String)
    }
  });
});

test('should setup add expense with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  });
});
