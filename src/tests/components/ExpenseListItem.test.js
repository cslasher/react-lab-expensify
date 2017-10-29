import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixures/expenses';

test('should render ExpenseListItem with expense', () => {
  const wrapper = shallow(
    <ExpenseListItem {...expenses[1]} key={expenses[1].id} />
  );
  expect(wrapper).toMatchSnapshot();
});
