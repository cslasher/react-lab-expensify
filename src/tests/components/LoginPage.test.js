import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render Login Page correctly', () => {
  const wrapper = shallow(
    <LoginPage startGoogleLogin={() => {}} startGithubLogin={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should call startGoogleLogin on button click', () => {
  const startGoogleLogin = jest.fn();
  const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} />);
  wrapper
    .find('button')
    .at(0)
    .simulate('click');
  expect(startGoogleLogin).toHaveBeenCalled();
});

test('should call startGithubLogin on button click', () => {
  const startGithubLogin = jest.fn();
  const wrapper = shallow(<LoginPage startGithubLogin={startGithubLogin} />);
  wrapper
    .find('button')
    .at(1)
    .simulate('click');
  expect(startGithubLogin).toHaveBeenCalled();
});
