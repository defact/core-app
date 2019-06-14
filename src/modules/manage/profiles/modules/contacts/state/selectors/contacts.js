import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.profiles.contacts.contacts.data;
const idsSelector = state => state.manage.profiles.contacts.contacts.ids;
  
export const profileContactsSelector = createSelector(
  dataSelector, idsSelector, (state, props) => props.pid, (contacts = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => contacts[id])) : []
  }
);