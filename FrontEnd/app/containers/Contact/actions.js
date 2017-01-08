/*
 *
 * Contact actions
 *
 */

import * as C from './constants';

export function sendContactInfoRequest(data) {
  return {
    type: C.SEND_CONTACT_INFO_REQUEST,
    data
  };
}
export function sendContactInfoSuccess(data) {
  return {
    type: C.SEND_CONTACT_INFO_SUCCESS,
    data
  };
}
export function sendContactInfoFailure(error) {
  return {
    type: C.SEND_CONTACT_INFO_FAILURE,
    error
  };
}
