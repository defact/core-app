import { combineReducers } from 'redux'; 
import { signOut } from '../actions/signout';

import { start, error } from '../../../../state/reducers';

export default combineReducers({ 
  isSigningOut: start(signOut), 
  error: error(signOut) 
});