import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchMe, fetchMeSuccess, fetchMeFailed, clearMe } from '../actions/me';

const isFetching = handleActions({
  [fetchMe]: (state) => true,
  [fetchMeSuccess]: (state) => false,
  [fetchMeFailed]: (state) => false,
  [clearMe]: (state) => false,
}, false);

const id = handleActions({
  [fetchMeSuccess]: (state, action) => action.payload.result,
  [clearMe]: (state) => null,
}, null);

const error = handleActions({
  [fetchMe]: (state) => false,
  [fetchMeSuccess]: (state) => false,
  [fetchMeFailed]: (state, action) => { message: action.payload.message },
  [clearMe]: (state) => false,
}, false);

export default combineReducers({ isFetching, id, error });
