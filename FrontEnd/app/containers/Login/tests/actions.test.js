import expect from 'expect';
import {
  loginUser,loginUserSuccess,loginUserFailure,logout,get_user_info
} from '../actions';

import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER,
  GET_USER_INFO_REQUEST} from '../constants';

describe('loginUser Action', () => {
  it('should create an loginUser action', () => {
    const email='email';
    const password='password';
    const redirect='/';
    let data={};
    data['email']=email;
    data['password']=password;
    data['redirect']=redirect;
    const expected = {
      type: LOGIN_USER_REQUEST,
      data
    };
    expect(loginUser(email, password, redirect)).toEqual(expected);
  });
});

describe('loginUserSuccess Action', () => {
  it('should create an loginUserSuccess action', () => {
    const response = 'response';
    const expected = {
      type: LOGIN_USER_SUCCESS,
      response
    };
    expect(loginUserSuccess(response)).toEqual(expected);
  });
});

describe('loginUserFailure Action', () => {
  it('should create an loginUserFailure action', () => {
    const error = 'error';
    const expected = {
      type: LOGIN_USER_FAILURE,
      error
    };
    expect(loginUserFailure(error)).toEqual(expected);
  });
});
