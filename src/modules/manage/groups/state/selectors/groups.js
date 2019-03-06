import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.entities.groups
const stateSelector = state => state.manage.groups.groups;

export const groupSelector = createSelector(
  dataSelector, stateSelector, (state, props) => props.gid, (groups = [], state, id) => {
    return ({ ...state, ...groups[id] })
  }
);

export const groupsSelector = createSelector(
  dataSelector, stateSelector, (groups = [], state) => 
    ({ ...state, groups: compact(state.ids.map(id => groups[id])) })
);
