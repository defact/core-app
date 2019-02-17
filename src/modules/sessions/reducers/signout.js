import { handleActions } from 'redux-actions';
import { signOut, signOutSuccess, signOutFailed } from '../actions/signout';

const initialState = {
  isSigningOut: false,
  error: false,
};

export default handleActions({
  [signOut]: (state) => ({ ...state, isSigningOut: true, error: false }),
  [signOutFailed]: (state) => ({ ...state, isSigningOut: false, error: true }),
  [signOutSuccess]: (state) => ({ ...state, isSigningOut: false, error: false }),
}, initialState);