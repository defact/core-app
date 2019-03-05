import compact from 'lodash.compact';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetch, fetchSuccess, fetchFailed } from '../actions/roles';
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
  [fetch]: (state) => ({ ...state, isFetching: true, isFetched: false, error: false }),
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
  dataSelector, stateSelector, (state, props) => props.rid, (roles = [], state, id) => {
    return ({ ...state, ...roles[id] })
  }
);

export const roleWithClaimsSelector = createSelector(
  dataSelector, entitiesSelector, stateSelector, (state, props) => props.rid, (roles = [], entities, state, id) => 
    ({ ...state, ...constructRole(entities, id && roles[id]) })
);

export const rolesSelector = createSelector(
  dataSelector, stateSelector, (roles = [], state) => 
    ({ ...state, roles: compact(state.ids.map(id => roles[id])) })
);

export const rolesWithClaimsSelector = createSelector(
  dataSelector, entitiesSelector, stateSelector, (roles = [], entities = [], state) => 
    ({ ...state, roles: constructRoles(compact(state.ids.map(id => roles[id])), entities) })
);
