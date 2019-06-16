import compact from 'lodash.compact';
import { createSelector } from 'reselect';
import { entitiesSelector } from '../../modules/claims/state/selectors/entities';

const compare = property => (a, b) => {
  const propA = a[property].toUpperCase();
  const propB = b[property].toUpperCase();

  if (propA > propB) {
    return 1;
  } else if (propA < propB) {
    return -1;
  }
  return 0;
};

const constructRole = (entities, role = { claims: [] }) => {
  const claims = entities.map(entity => {
    const claim = role.claims.find(c => c.entity === entity.id);
    return claim === undefined ? { entity: entity.id, right: 0 } : claim;
  });
  return { ...role, claims };
};

const constructRoles = (roles, entities) => (
  roles
  .map(role => constructRole(entities, role))
  .sort(compare('name'))
);

const stateSelector = state => state.manage.roles.roles;
const dataSelector = state => state.manage.roles.roles.data;

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
