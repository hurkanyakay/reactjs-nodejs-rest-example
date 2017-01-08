import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER,
        GET_USER_INFO_REQUEST} from './constants';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import { fromJS } from 'immutable';
const initialState = fromJS({
  token: false,
  name: false,
  picture:false,
  email:false,
  isAuthenticated: false,
  isAuthenticating: false,
  errorText: false
});
function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return state
        .set('isAuthenticating', true)
        .set('errorText', false);
    case LOGIN_USER_SUCCESS:
      return state
        .set('isAuthenticating', false)
        .set('isAuthenticated', true)
        .set('token', action.response.token)
        .set('name', action.response.data.name)
        .set('picture', action.response.data.picture)
        .set('email', action.response.data.email)
        .set('errorText', false);
    case LOGIN_USER_FAILURE:
      return state
        .set('isAuthenticating', false)
        .set('isAuthenticated', false)
        .set('token', false)
        .set('name', false)
        .set('picture', false)
        .set('email', false)
        .set('errorText', action.error);
    case LOGOUT_USER:
      return state
        .set('isAuthenticating', false)
        .set('isAuthenticated', false)
        .set('token', false)
        .set('name', false)
        .set('picture', false)
        .set('email', false)
    case GET_USER_INFO_REQUEST:
      return state
        .set('isAuthenticating', true);    
    default:
      return state;
  }
}

export default authReducer;
