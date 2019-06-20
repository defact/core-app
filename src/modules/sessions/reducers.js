import { combineReducers } from 'redux';

import signIn from './state/reducers/signin';
import signOut from './state/reducers/signout';
import reset from './state/reducers/reset';

export default combineReducers({ signIn, signOut, reset });