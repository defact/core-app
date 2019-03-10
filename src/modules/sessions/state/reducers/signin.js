import { combineReducers } from 'redux'; 
import { handleActions } from 'redux-actions';
import { signIn } from '../actions/signin';
import { signOut } from '../actions/signout';

import { start, error } from '../../../../state/reducers';

const token = handleActions({
  [signIn.success]: (state, action) => action.payload.token,
  [signOut.success]: (state) => null,
}, null);

export default combineReducers({ 
  isSigningIn: start(signIn), 
  token, 
  error: error(signIn) 
});