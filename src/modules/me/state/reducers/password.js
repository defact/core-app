import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { changePassword, changePasswordSuccess, changePasswordFailed } from '../actions/password';

const isChanging = handleActions({
  [changePassword]: (state) => true,
  [changePasswordSuccess]: (state) => false,
  [changePasswordFailed]: (state) => false,
}, false);

const hasChanged = handleActions({
  [changePassword]: (state) => false,
  [changePasswordSuccess]: (state) => true,
  [changePasswordFailed]: (state) => false,
}, false);

const error = handleActions({
  [changePassword]: (state) => false,
  [changePasswordSuccess]: (state) => false,
  [changePasswordFailed]: (state, action) => { message: action.payload.message },
}, false);

export default combineReducers({ isChanging, hasChanged, error });  