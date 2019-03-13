import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.roles.entities.data;
const idsSelector = state => state.manage.roles.entities.ids;
  
export const entitiesSelector = createSelector(
  dataSelector, idsSelector, (entities = [], ids) => compact(ids.map(id => entities[id]))
);