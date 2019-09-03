import compact from 'lodash.compact';
import find from 'lodash.find';
import { createSelector } from 'reselect';

const dataSelector = state => state.manage.profiles.photos.photos.data;
const idsSelector = state => state.manage.profiles.photos.photos.ids;
  
export const profilePhotosSelector = createSelector(
  dataSelector, idsSelector, (_, props) => props.pid, (photos = [], ids, id) => {
    ids = ids[id];
    return ids ? compact(ids.map(id => photos[id])) : []
  }
);  

export const profilePhotoSelector = createSelector(
  dataSelector, (_, props) => props.phid, (photos = [], phid) => {
    return phid && find(photos, ph => ph.id === parseInt(phid, 10));
  }
);

export const photosSelector = state => state.manage.profiles.photos.photos;