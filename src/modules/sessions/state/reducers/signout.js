import { combineReducers } from 'redux'; 
import { handleActions } from 'redux-actions';
import { signOut, signOutSuccess, signOutFailed } from '../actions/signout';

const isSigningOut = handleActions({
  [signOut]: (state) => true,
  [signOutSuccess]: (state) => false,
  [signOutFailed]: (state) => false,
}, false);

const error = handleActions({
  [signOut]: (state) => false,
  [signOutSuccess]: (state) => false,
  [signOutFailed]: (state, action) => { message: action.payload.message },
}, false);

export default combineReducers({ isSigningOut, error });