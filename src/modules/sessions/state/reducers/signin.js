import { handleActions } from 'redux-actions';
import { signIn, signInSuccess, signInFailed } from '../actions/signin';
import { signOutSuccess } from '../actions/signout';

const initialState = {
  isSigningIn: false,
  token: undefined,
  error: false,
};

export default handleActions({
  [signIn]: (state) => ({ ...state, isSigningIn: true, error: false }),
  [signInSuccess]: (state, action) =>
    ({ ...state, token: action.payload.token, isSigningIn: false, error: false }),
  [signInFailed]: (state, action) => 
    ({ ...state, isSigningIn: false, error: { message: action.payload.message }}),

  [signOutSuccess]: (state) => ({ ...state, token: null }),
}, initialState);