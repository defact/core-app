import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchPermissions, fetchSuccess, fetchFailed } from '../actions/permissions';

const initialState = {
  isFetching: false,
  isFetched: false,
  error: false,
  ids: [],
};

export default handleActions({
  [fetchPermissions]: (state) => ({ ...state, isFetching: true, isFetched: false, error: false }),
  [fetchSuccess]: (state, action) =>
    ({ ...state, ids: action.payload.result, isFetching: false, isFetched: true, error: false }),
  [fetchFailed]: (state, action) => 
    ({ ...state, isFetching: false, isFetched: true, error: { message: action.payload.message }}),
  }, initialState);

const dataSelector = state => state.entities.permissions
const idsSelector = state => state.manage.roles.permissions.ids;
  
export const permissionsSelector = createSelector(
  dataSelector, idsSelector, (permissions = [], ids) => ids.map(id => permissions[id])
);