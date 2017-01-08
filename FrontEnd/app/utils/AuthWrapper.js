import { UserAuthWrapper } from 'redux-auth-wrapper'
import { push } from 'react-router-redux';

export const requireAuthentication = UserAuthWrapper({
  authSelector: state => state.get("auth") ,
  predicate: auth => auth.get('isAuthenticated'),
  redirectAction: push,
  wrapperDisplayName: 'UserIsJWTAuthenticated'
});
