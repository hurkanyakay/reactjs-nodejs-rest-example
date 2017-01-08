import { createSelector } from 'reselect';

/**
 * Direct selector to the contact state domain
 */
const selectContactDomain = () => (state) => state.get('contact');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Contact
 */

const selectContact = () => createSelector(
  selectContactDomain(),
  (substate) => substate.toJS()
);

export default selectContact;
export {
  selectContactDomain,
};
