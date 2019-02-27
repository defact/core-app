import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchRoles, fetchSuccess, fetchFailed } from '../actions/roles';
import { entitiesSelector } from './entities';

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

const constructClaims = (roles, entities) => (
  roles.map(role => {
    const claims = entities.map(entity => {
      const claim = role.claims.find(c => c.entity === entity.id);
      return claim === undefined ? { entity: entity.id, right: 0 } : claim;
    });
    return { ...role, claims };
  })
);

export const rolesSelector = createSelector(
  dataSelector, entitiesSelector, stateSelector, (roles = [], entities = [], state) => ({
    ...state, roles: constructClaims(state.ids.map(id => roles[id]), entities)
  })
);