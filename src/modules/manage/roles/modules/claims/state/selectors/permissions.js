import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const idsSelector = state => state.manage.roles.claims.permissions.ids;
const dataSelector = state => state.manage.roles.claims.permissions.data
  
export const permissionsSelector = createSelector(
  dataSelector, idsSelector, (permissions = [], ids) => compact(ids.map(id => permissions[id]))
);