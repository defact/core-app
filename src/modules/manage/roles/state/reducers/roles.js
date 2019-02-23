import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchRoles, fetchSuccess, fetchFailed } from '../actions/roles';

const initialState = {
  isFetching: false,
  isFetched: false,
  error: false,
  ids: [],
};

export default handleActions({
  [fetchRoles]: (state) => ({ ...state, isFetching: true, isFetched: false, error: false }),
  [fetchSuccess]: (state, action) =>
    ({ ...state, ids: action.payload.result, isFetching: false, isFetched: true, error: false }),
  [fetchFailed]: (state, action) => 
    ({ ...state, isFetching: false, isFetched: true, error: { message: action.payload.message }}),
  }, initialState);

const dataSelector = state => state.entities.roles
const stateSelector = state => state.manage.roles.roles;

export const rolesSelector = createSelector(
  dataSelector, stateSelector, (roles = [], state) => ({
    ...state, roles: state.ids.map(id => roles[id])
  })
);