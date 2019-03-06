import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { show, close } from '../actions/alert';

const isOpen = handleActions({
  [show]: (state, action) => action.payload.message.length > 0,
  [close]: (state) => false,
}, false);

const message = handleActions({
  [show]: (state, action) => action.payload.message,
}, '');

const type = handleActions({
  [show]: (state, action) => action.payload.type || 'info',
}, 'info');

export default combineReducers({ isOpen, message, type });
