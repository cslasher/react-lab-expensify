import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render summary with single expense correctly', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={320} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render summary with plural expenses correctly', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={12} expensesTotal={3200} />
  );
  expect(wrapper).toMatchSnapshot();
});
