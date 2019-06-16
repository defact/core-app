import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.roles.claims.entities.data;
const idsSelector = state => state.manage.roles.claims.entities.ids;
  
export const entitiesSelector = createSelector(
  dataSelector, idsSelector, (entities = [], ids) => compact(ids.map(id => entities[id]))
);