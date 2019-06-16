import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.profiles.contacts.contacts.data;
const idsSelector = state => state.manage.profiles.contacts.contacts.ids;
  
export const profileContactsSelector = createSelector(
  dataSelector, idsSelector, (_, props) => props.pid, (contacts = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => contacts[id])) : []
  }
);  

export const profileContactSelector = createSelector(
  dataSelector, idsSelector, (_, props) => props.pid, (_, props) => props.cid, (contacts = [], ids, pid, cid) => {
    ids = ids[pid];
    if (ids === undefined) return;
    cid = ids[cid];
    return cid && contacts[cid];
  }
);

export const contactsSelector = state => state.manage.profiles.contacts.contacts;