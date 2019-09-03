import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const stateSelector = state => state.manage.profiles.tags;
const dataSelector = state => state.manage.profiles.tags.data;

export const tagSelector = createSelector(
  dataSelector, stateSelector, (_, props) => props.tid, (tags = [], state, id) => {
    return ({ ...state, ...tags[id] })
  }
);

export const tagsSelector = createSelector(
  dataSelector, stateSelector, (tags = [], state) => 
    ({ ...state, tags: compact(state.ids.map(id => tags[id])) })
);