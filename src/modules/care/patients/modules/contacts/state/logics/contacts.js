import { createLogic } from 'redux-logic';
import { fetch, add, save, remove } from '../actions/contacts';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {  
    const { id } = action.payload;

    return api().get(`profiles/${id}/contacts`)
    .then(data => dispatch(fetch.success({ key: id, ...normalize(data.contacts, [ schemas.contact ]) })))
    .catch(err => dispatch(fetch.failed(err)))
    .then(done);
  }
});

const onAdd = createLogic({
  type: add.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, classifier, value, onSuccess, onFailure } = action.payload;

    return api().post(`profiles/${id}/contacts`, { classifier, value })
    .then(data => dispatch(add.success({ key: id, ...normalize(data.contact, schemas.contact) })))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(add.failed(err));
    });
  }
});

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, classifier, value, profile, options, onSuccess, onFailure } = action.payload;
    const { redirectTo, message } = options;

    return api().put(`profiles/${profile.id}/contacts/${id}`, { classifier, value })
    .then(data => dispatch(save.success(normalize(data.contact, schemas.contact))))
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
    const { profile, contact } = action.payload;

    return api().delete(`profiles/${profile.id}/contacts/${contact.id}`)
    .then(_ => dispatch(remove.success({ key: profile.id, ...normalize(contact, schemas.contact) })))
    .catch(err => dispatch(remove.failed(err)))
    .then(done);
  }
});

export default [ onFetch, onAdd, onSave, onRemove ];