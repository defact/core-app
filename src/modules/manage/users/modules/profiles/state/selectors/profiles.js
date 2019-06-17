import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.profiles.profiles.data;
const idsSelector = state => state.manage.users.profiles.ids;
  
export const userProfilesSelector = createSelector(
  dataSelector, idsSelector, (_, props) => props.uid, (profiles = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => profiles[id])) : []
  }
);

export const profilesSelector = state => state.manage.profiles.profiles;
