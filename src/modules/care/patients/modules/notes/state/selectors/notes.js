import compact from 'lodash.compact';
import find from 'lodash.find';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.profiles.notes.notes.data;
const idsSelector = state => state.manage.profiles.notes.notes.ids;
  
export const profileNotesSelector = createSelector(
  dataSelector, idsSelector, (_, props) => props.pid, (notes = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => notes[id])) : []
  }
);  

export const profileNoteSelector = createSelector(
  dataSelector, (_, props) => props.nid, (notes = [], cid) => {
    return nid && find(notes, n => n.id === parseInt(nid, 10));
  }
);

export const notesSelector = state => state.manage.profiles.notes.notes;