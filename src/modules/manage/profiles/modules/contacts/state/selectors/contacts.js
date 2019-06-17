import compact from 'lodash.compact';
import find from 'lodash.find';
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
  dataSelector, (_, props) => props.cid, (contacts = [], cid) => {
    return cid && find(contacts, c => c.id === parseInt(cid, 10));
  }
);

export const contactsSelector = state => state.manage.profiles.contacts.contacts;