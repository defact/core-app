import { combineReducers } from 'redux';

import signIn from './signin';
import signOut from './signout';

export default combineReducers({ signIn, signOut });