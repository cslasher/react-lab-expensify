import React from 'react';
import { shallow } from 'enzyme';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';

test('should render Remove Modal correctly', () => {
  const wrapper = shallow(
    <RemoveExpenseModal
      modalIsOpen
      handleConfirmRemove={() => {}}
      handleCancelRemove={() => {}}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
