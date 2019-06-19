import compact from 'lodash.compact';
import { createSelector } from 'reselect';

import { process } from '../../../../../state/selectors';

import { rolesSelector } from '../../../roles/state/selectors/roles';

const filterAndSort = process({ email: 'string', isFixed: 'boolean' });

const constructUser = (roles = [], user = { roles: [] }) => {
  return { ...user, roles: roles.map(role => {
      const has = user.roles.find(r => r === role.id) !== undefined;
      return { ...role, has };
    })
  };
};

const stateSelector = state => state.manage.users.users;
const dataSelector = state => state.manage.users.users.data;
const filterSelector = state => state.manage.users.users.filter;
const pageSelector = state => state.manage.users.users.page;
const sortSelector = state => state.manage.users.users.sort;

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
  dataSelector, filterSelector, pageSelector, sortSelector, stateSelector, 
  (users = [], filter, page, sort, state) => 
    ({ ...state, sort, users: filterAndSort(compact(state.ids.map(id => users[id])), filter, page, sort) })
);