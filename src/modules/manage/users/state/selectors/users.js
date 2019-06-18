import compact from 'lodash.compact';
import { createSelector } from 'reselect';

import { rolesSelector } from '../../../roles/state/selectors/roles';

const constructUser = (roles = [], user = { roles: [] }) => {
  return { ...user, roles: roles.map(role => {
      const has = user.roles.find(r => r === role.id) !== undefined;
      return { ...role, has };
    })
  };
};

const stateSelector = state => state.manage.users.users;
const dataSelector = state => state.manage.users.users.data;

export const userSelector = createSelector(
  dataSelector, stateSelector, (_, props) => props.uid, (users = [], state, id) => {
    return ({ ...state, ...users[id] })
  }
);

export const userWithRolesSelector = createSelector(
  dataSelector, rolesSelector, stateSelector, (_, props) => props.uid, 
  (users = [], roles, state, id) => 
    ({ ...state, ...constructUser(roles.roles, users[id]) })
);

export const usersSelector = createSelector(
  dataSelector, stateSelector, (users = [], state) => 
    ({ ...state, users: compact(state.ids.map(id => users[id])) })
);