import { combineReducers } from 'redux'; 
import { handleActions } from 'redux-actions';
import { signIn, signInSuccess, signInFailed } from '../actions/signin';
import { signOutSuccess } from '../actions/signout';

const isSigningIn = handleActions({
  [signIn]: (state) => true,
  [signInSuccess]: (state) => false,
  [signInFailed]: (state) => false,
}, false);

const token = handleActions({
  [signInSuccess]: (state, action) => action.payload.token,
  [signOutSuccess]: (state) => null,
}, null);

const error = handleActions({
  [signIn]: (state) => false,
  [signInSuccess]: (state) => false,
  [signInFailed]: (state, action) => ({ message: action.payload.message }),
}, false);

export default combineReducers({ isSigningIn, token, error });