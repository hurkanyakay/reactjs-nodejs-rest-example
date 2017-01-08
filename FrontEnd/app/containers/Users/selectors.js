import { createSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */
const selectUsersDomain = () => (state) => state.get('users');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Users
 */

const selectUsers = () => createSelector(
  selectUsersDomain(),
  (substate) => substate.toJS()
);

export default selectUsers;
export {
  selectUsersDomain,
};
