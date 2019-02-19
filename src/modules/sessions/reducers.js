import { combineReducers } from 'redux';

import signIn from './state/reducers/signin';
import signOut from './state/reducers/signout';

export default combineReducers({ signIn, signOut });