import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const Item = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h4>{description}</h4>
    <p>
      ${amount} - {createdAt}
    </p>
    <button
      onClick={e => {
        dispatch(removeExpense(id));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(Item);
