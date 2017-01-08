import { createSelector } from 'reselect';

const selectAuth = () => (state) => state.get('auth');

const selectisAuthenticating = () => createSelector(
  selectAuth(),
  (selectisAuthenticating) => selectisAuthenticating.get('isAuthenticating')
);
const selectError = () => createSelector(
  selectAuth(),
  (selectStatus) => selectStatus.get('errorText')
);
const selectisAuthenticated = () => createSelector(
  selectAuth(),
  (state) => state.get('isAuthenticated')
);

const selectPicture= () => createSelector(
  selectAuth(),
  (state) => state.get('picture')
);
const selectName= () => createSelector(
  selectAuth(),
  (state) => state.get('name')
);

export {
  selectPicture,
  selectisAuthenticating,
  selectError,
  selectisAuthenticated,
  selectName
};
