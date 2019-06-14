import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.profiles.contacts.classifiers.data;
const idsSelector = state => state.manage.profiles.contacts.classifiers.ids;
  
export const classifiersSelector = createSelector(
  dataSelector, idsSelector, (classifiers = [], ids) => compact(ids.map(id => classifiers[id]))
);