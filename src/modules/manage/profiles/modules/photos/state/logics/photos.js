import { createLogic } from 'redux-logic';
import { fetch, add, save, remove } from '../actions/photos';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {  
    const { id } = action.payload;

    return api().get('photos', { owner: id })
    .then(data => dispatch(fetch.success({ key: id, ...normalize(data.photos, [ schemas.photo ]) })))
    .catch(err => dispatch(fetch.failed(err)))
    .then(done);
  }
});

const toFormData = data => {
  const form = new FormData();
  Object.keys(data).forEach(field => form.append(field, data[field]));
  return form;
};

const onAdd = createLogic({
  type: add.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, caption, file, onSuccess } = action.payload;

    return api().post('photos', toFormData({ owner: id, file, caption }))
    .then(data => dispatch(add.success({ key: id, ...normalize(data.photo, schemas.photo) })))
    .then(onSuccess)
    .then(done)
    .catch(err => dispatch(add.failed(err)));
  }
});

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, value, profile, onSuccess, onFailure } = action.payload;

    return api().put(`profiles/${profile.id}/photos/${id}`, { value })
    .then(data => dispatch(save.success(normalize(data.photo, schemas.photo))))
    .then(onSuccess())
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(save.failed(err));
    });
  }
});

const onRemove = createLogic({
  type: remove.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { profile, photo } = action.payload;

    return api().delete(`profiles/${profile.id}/photos/${photo.id}`)
    .then(_ => dispatch(remove.success({ key: profile.id, ...normalize(photo, schemas.photo) })))
    .catch(err => dispatch(remove.failed(err)))
    .then(done);
  }
});

export default [ onFetch, onAdd, onSave, onRemove ];