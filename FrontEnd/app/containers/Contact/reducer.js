/*
 *
 * Contact reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

const initialState = fromJS({
  sendingInfo: false,
  sentInfo:false,
  sendingError:false
});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case C.SEND_CONTACT_INFO_REQUEST:
      return state
        .set('sendingInfo', true)
        .set('errorText', false);
    case C.SEND_CONTACT_INFO_SUCCESS:
      return state
        .set('sendingInfo', false)
        .set('sentInfo', true)
        .set('errorText', false);
    case C.SEND_CONTACT_INFO_FAILURE:
      return state
        .set('sendingInfo', false)
        .set('sentInfo', false)
        .set('errorText', action.error);
    default:
      return state;
  }
}

export default contactReducer;
