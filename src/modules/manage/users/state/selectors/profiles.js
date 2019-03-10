import compact from 'lodash.compact';
import { createSelector } from 'reselect';

const dataSelector = state => state.app.entities.profiles;
const idsSelector = state => state.manage.users.profiles.ids;
  
export const userProfilesSelector = createSelector(
  dataSelector, idsSelector, (state, props) => props.uid, (profiles = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => profiles[id])) : []
  }
);