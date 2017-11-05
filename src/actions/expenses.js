import database from '../firebase/firebase';

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const startEditExpense = (id, updates) => {
  return dispatch => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

export const startRemoveExpense = id => {
  return dispatch => {
    return database.ref(`expenses/${id}`).remove(() => {
      dispatch(removeExpense(id));
    });
  };
};

export const startSetExpenses = () => {
  return dispatch => {
    return database
      .ref('expenses')
      .once('value')
      .then(snapshot => {
        const expensesData = [];
        snapshot.forEach(childSnapshot => {
          expensesData.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expensesData));
      });
  };
};
