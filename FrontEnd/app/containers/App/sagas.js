
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as loginActions from 'containers/Login/actions';
import { push } from 'react-router-redux'
import request from 'utils/request';

export function* get_user_info(action) {
    const requestURL = '/api/auth';
    const options = {
       method: 'get',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
         'x-access-token': action.token
       }
    }
    try {
      const { response, error } = yield call(request,requestURL, options);
      if (response){
        if (response.success){
          response.token = action.token;
          yield put(loginActions.loginUserSuccess(response));
          yield put(push(action.redirect));
        }else{
          yield put(loginActions.loginUserFailure(response.message));
        }

      }else{
        yield put(loginActions.loginUserFailure(error));
      }
    } catch (err) {
      yield put(loginActions.loginUserFailure(err));
    }
}
/**
 * Root saga manages watcher lifecycle
 */
export function* rootSaga() {
  const watcher0 = yield takeLatest('GET_USER_INFO_REQUEST', get_user_info);

}

export default rootSaga;
