import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.app.entities.users;
const idsSelector = state => state.manage.profiles.users.ids;
  
export const profileUsersSelector = createSelector(
  dataSelector, idsSelector, (state, props) => props.pid, (users = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => users[id])) : []
  }
);