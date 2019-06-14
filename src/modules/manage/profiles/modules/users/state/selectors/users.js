import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.users.users.data;
const idsSelector = state => state.manage.profiles.users.users.ids;

export const profileUsersSelector = createSelector(
  dataSelector, idsSelector, (state, props) => props.pid, (users = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => users[id])) : []
  }
);