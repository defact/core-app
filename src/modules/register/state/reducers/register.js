import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { register, registerSuccess, registerFailed } from '../actions/register';

const isRegistering = handleActions({
  [register]: (state) => true,
  [registerSuccess]: (state) => false,
  [registerFailed]: (state) => false,
}, false);

const error = handleActions({
  [register]: (state) => false,
  [registerSuccess]: (state) => false,
  [registerFailed]: (state, action) => { message: action.payload.message },
}, false);

export default combineReducers({ isRegistering, error });