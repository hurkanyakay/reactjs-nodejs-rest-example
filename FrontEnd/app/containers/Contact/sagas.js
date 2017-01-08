
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as contactActions from 'containers/Contact/actions';
import { push } from 'react-router-redux'
import request from 'utils/request';

export function* sendContact(action) {
    let {name, email, subject, message} = action.data;
    var body='email='+email+'&name='+name+'&subject='+subject+'&message='+message;
    const requestURL = '/api/contact';
    const options = {
       method: 'post',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
       },
           body: body
    }
    try {
      const { response, error } = yield call(request,requestURL, options);
      if (response){
        if (response.success){
          yield put(contactActions.sendContactInfoSuccess(response));
        }else{
          yield put(contactActions.sendContactInfoFailure(response.message));
        }
      }else{
        yield put(contactActions.sendContactInfoFailure(error));
      }
    } catch (err) {
      yield put(contactActions.sendContactInfoFailure(err));
    }
}


/**
 * Root saga manages watcher lifecycle
 */
export function* root() {
  const watcher1 = yield takeLatest('SEND_CONTACT_INFO_REQUEST', sendContact);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher1);
}

// Bootstrap sagas
export default [
  root,
];
