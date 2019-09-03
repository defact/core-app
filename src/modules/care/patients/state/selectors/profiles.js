import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const stateSelector = state => state.care.patients.profiles;
const dataSelector = state => state.care.patients.profiles.data;

export const profileSelector = createSelector(
  dataSelector, stateSelector, (_, props) => props.pid, (profiles = [], state, id) => {
    return ({ ...state, ...profiles[id] })
  }
);

export const profilesSelector = createSelector(
  dataSelector, stateSelector, (profiles = [], state) => 
    ({ ...state, profiles: compact(state.ids.map(id => profiles[id])) })
);