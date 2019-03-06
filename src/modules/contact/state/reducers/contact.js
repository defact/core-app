import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { send, sendSuccess, sendFailed } from '../actions/contact';

const isSending = handleActions({
  [send]: (state) => true,
  [sendSuccess]: (state) => false,
  [sendFailed]: (state) => false,
}, false);

const error = handleActions({
  [send]: (state) => false,
  [sendSuccess]: (state) => false,
  [sendFailed]: (state, action) => ({ message: action.payload.message }),
}, false);

export default combineReducers({ isSending, error });