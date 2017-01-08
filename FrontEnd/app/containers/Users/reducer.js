/*
 *
 * Users reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  userList: [
    'John, Doe',
    'Dummy User1',
    'Dummy User2',
    'Dummy User3',
  ]
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default usersReducer;
