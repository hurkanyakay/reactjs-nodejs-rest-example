import expect from 'expect';
import loginReducer from '../reducer';
import { fromJS } from 'immutable';

describe('loginReducer', () => {
  it('returns the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(fromJS({
      token: false,
      name: false,
      picture:false,
      email:false,
      isAuthenticated: false,
      isAuthenticating: false,
      errorText: false
    }));
  });
});
