import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const stateSelector = state => state.manage.groups.groups;
const dataSelector = state => state.manage.groups.groups.data;

export const groupSelector = createSelector(
  dataSelector, stateSelector, (state, props) => props.gid, (groups = [], state, id) => {
    const group = groups[id];
    if (group === undefined) return { ...state };
    return { ...state, ...group, groups: group.groups.map(id => groups[id]) };
  }
);

export const groupsSelector = createSelector(
  dataSelector, stateSelector, (groups = [], state) => 
    ({ ...state, groups: compact(state.ids.map(id => groups[id])) })
);
