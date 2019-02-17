import { handleActions } from 'redux-actions';
import { fetchMe, fetchMeSuccess, fetchMeFailed, clearMe } from '../actions/me';

const initialState = {
  isFetching: false,
  error: false,
};

export default handleActions({
  [fetchMe]: (state) => ({ ...state, isFetching: true, error: false }),
  [fetchMeSuccess]: (state, action) =>
    ({ ...state, ...action.payload.user, isFetching: false, error: false }),
  [fetchMeFailed]: (state, action) => 
    ({ ...state, isFetching: false, error: { message: action.payload.message }}),
  [clearMe]: () => initialState,
  }, initialState);