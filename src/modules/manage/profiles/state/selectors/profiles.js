import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.app.entities.profiles
const stateSelector = state => state.manage.profiles.profiles;

export const profileSelector = createSelector(
  dataSelector, stateSelector, (state, props) => props.pid, (profiles = [], state, id) => {
    return ({ ...state, ...profiles[id] })
  }
);

export const profilesSelector = createSelector(
  dataSelector, stateSelector, (profiles = [], state) => 
    ({ ...state, profiles: compact(state.ids.map(id => profiles[id])) })
);