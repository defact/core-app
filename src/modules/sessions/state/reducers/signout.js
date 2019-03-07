import { combineReducers } from 'redux'; 
import { signOut } from '../actions/signout';

import { is, error } from '../../../../state/reducers';

export default combineReducers({ isSigningOut: is(signOut), error: error(signOut) });