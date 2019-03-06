import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { change, success, failed } from '../actions/password';

const isChanging = handleActions({
  [change]: (state) => true,
  [success]: (state) => false,
  [failed]: (state) => false,
}, false);

const hasChanged = handleActions({
  [change]: (state) => false,
  [success]: (state) => true,
  [failed]: (state) => false,
}, false);

const error = handleActions({
  [change]: (state) => false,
  [success]: (state) => false,
  [failed]: (state, action) => ({ message: action.payload.message }),
}, false);

export default combineReducers({ isChanging, hasChanged, error });  