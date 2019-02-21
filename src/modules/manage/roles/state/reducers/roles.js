import { handleActions } from 'redux-actions';
import { fetch, fetchSuccess, fetchFailed } from '../actions/roles';

const initialState = {
  isFetching: false,
  isFetched: false,
  error: false,
  ids: [],
};

export default handleActions({
  [fetch]: (state) => ({ ...state, isFetching: true, isFetched: false, error: false }),
  [fetchSuccess]: (state, action) =>
    ({ ...state, ids: action.payload.result, isFetching: false, isFetched: true, error: false }),
  [fetchFailed]: (state, action) => 
    ({ ...state, isFetching: false, isFetched: true, error: { message: action.payload.message }}),
  }, initialState);

const rolesSelector = state => state.entities.roles;