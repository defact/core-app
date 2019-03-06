import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.app.entities.entities;
const idsSelector = state => state.manage.roles.entities.ids;
  
export const entitiesSelector = createSelector(
  dataSelector, idsSelector, (entities = [], ids) => compact(ids.map(id => entities[id]))
);