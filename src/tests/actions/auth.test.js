import { login, logout } from '../../actions/auth';

test('should generate login to uid', () => {
  const uid = 'abc123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
