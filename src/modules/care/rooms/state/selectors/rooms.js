import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const stateSelector = state => state.care.rooms.rooms;
const dataSelector = state => state.care.rooms.rooms.data;

export const roomSelector = createSelector(
  dataSelector, stateSelector, (_, props) => props.rid, (rooms = [], state, id) => {
    return ({ ...state, ...rooms[id] })
  }
);

export const roomsSelector = createSelector(
  dataSelector, stateSelector, (rooms = [], state) => 
    ({ ...state, rooms: compact(state.ids.map(id => rooms[id])) })
);