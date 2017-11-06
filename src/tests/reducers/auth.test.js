import authReducers from '../../reducers/auth';

test('should login user with uid', () => {
  const uid = 'abc123';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducers(undefined, action);
  expect(state.uid).toBe(uid);
});

test('should logout user with empty state', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducers({ uid: 'abc123' }, action);
  expect(state).toEqual({});
});
