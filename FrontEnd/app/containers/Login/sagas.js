
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER,
  GET_USER_INFO_REQUEST } from 'containers/Login/constants';
import * as loginActions from 'containers/Login/actions';
import { push } from 'react-router-redux'
import request from 'utils/request';

export function* getLogin(action) {
    let {email, password,redirect} = action.data;
    var auth='email='+email+'&password='+password;
    const requestURL = '/api/auth';
    const options = {
       method: 'post',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
       },
           body: auth
    }
    try {
      const { response, error } = yield call(request,requestURL, options);
      if (response){
        if (response.success){
          yield put(loginActions.loginUserSuccess(response));
          yield put(push(redirect));
        }else{
          yield put(loginActions.loginUserFailure(response.message));
        }
      }else{
        console.log(error);
        yield put(loginActions.loginUserFailure(error));
      }
    } catch (err) {
      console.log("error",err);
      yield put(loginActions.loginUserFailure(err));
    }
}


/**
 * Root saga manages watcher lifecycle
 */
export function* root() {
  const watcher1 = yield takeLatest(LOGIN_USER_REQUEST, getLogin);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher1);
}

// Bootstrap sagas
export default [
  root,
];
