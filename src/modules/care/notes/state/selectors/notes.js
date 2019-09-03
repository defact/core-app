import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const stateSelector = state => state.care.notes.notes;
const dataSelector = state => state.care.notes.notes.data;

export const noteSelector = createSelector(
  dataSelector, stateSelector, (_, props) => props.nid, (notes = [], state, id) => {
    return ({ ...state, ...notes[id] })
  }
);

export const notesSelector = createSelector(
  dataSelector, stateSelector, (rooms = [], state) => 
    ({ ...state, notes: compact(state.ids.map(id => notes[id])) })
);