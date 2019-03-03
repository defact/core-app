import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchRoles, fetchSuccess, fetchFailed } from '../actions/roles';
import { add, addSuccess, addFailed } from '../actions/roles';
import { entitiesSelector } from './entities';
import { constructRoles, constructRole } from '../helpers/roles';

const initialState = {
  isFetching: false,
  isFetched: false,
  isSaving: false,
  isSaved: false,
  error: false,
  ids: [],
};

export default handleActions({
  [fetchRoles]: (state) => ({ ...state, isFetching: true, isFetched: false, error: false }),
  [fetchSuccess]: (state, action) =>
    ({ ...state, ids: action.payload.result, isFetching: false, isFetched: true, error: false }),
  [fetchFailed]: (state, action) => 
    ({ ...state, isFetching: false, isFetched: true, error: { message: action.payload.message }}),
  
  [add]: (state) => ({ ...state, isSaving: true, isSaved: false, error: false }),
  [addSuccess]: (state, action) =>
    ({ ...state, ids: [ ...state.ids, action.payload.result ], isSaving: false, isSaved: true, error: false }),
  [addFailed]: (state, action) => 
    ({ ...state, isSaving: false, isSaved: true, error: { message: action.payload.message }}),
    }, initialState);

const dataSelector = state => state.entities.roles
const stateSelector = state => state.manage.roles.roles;

export const roleSelector = createSelector(
  entitiesSelector, stateSelector, (entities = [], state) => 
    ({ ...state, ...constructRole(entities) })
);

export const rolesSelector = createSelector(
  dataSelector, entitiesSelector, stateSelector, (roles = [], entities = [], state) => 
    ({ ...state, roles: constructRoles(state.ids.map(id => roles[id]), entities) })
);