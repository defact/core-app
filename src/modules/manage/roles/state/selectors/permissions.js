import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.entities.permissions
const idsSelector = state => state.manage.roles.permissions.ids;
  
export const permissionsSelector = createSelector(
  dataSelector, idsSelector, (permissions = [], ids) => compact(ids.map(id => permissions[id]))
);