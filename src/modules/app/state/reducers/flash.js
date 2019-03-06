import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { show, dismiss } from '../actions/flash';

const isActive = handleActions({
  [show]: (state, action) => true,
  [dismiss]: (state) => false,
}, false);

const message = handleActions({
  [show]: (state, action) => action.payload.message,
  [dismiss]: (state) => '',
}, '');

const type = handleActions({
  [show]: (state, action) => action.payload.type || 'info',
}, 'info');

export default combineReducers({ isActive, message, type });
