import { createLogic } from 'redux-logic';
import { fetch, add, remove } from '../actions/contacts';

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
    .then(data => dispatch(add.success({ key: profile.id, ...normalize(data.contact, schemas.contact) })))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(add.failed(err));
    });
  }
});

const onRemove = createLogic({
  type: remove.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { profile, contact } = action.payload;

    return api().delete(`profiles/${profile.id}/contacts/${contact.id}`)
    .then(data => dispatch(remove.success({ key: profile.id, ...normalize(contact, schemas.contact) })))
    .catch(err => dispatch(remove.failed(err)))
    .then(done);
  }
});

export default [ onFetch, onAdd, onRemove ];