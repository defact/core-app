import { createLogic } from 'redux-logic';
import { fetch, add, cancel } from '../actions/notes';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {  
    const { id } = action.payload;

    return api().get('notes', { profile: id })
    .then(data => dispatch(fetch.success({ key: id, ...normalize(data.notes, [ schemas.note ]) })))
    .catch(err => dispatch(fetch.failed(err)))
    .then(done);
  }
});

const onAdd = createLogic({
  type: add.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    console.log(action)
    const { id, text, tags, onSuccess, onFailure } = action.payload;

    return api().post('notes', { text, tags, profile: id })
    .then(data => dispatch(add.success({ key: id, ...normalize(data.note, schemas.note) })))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(add.failed(err));
    });
  }
});

const onCancel = createLogic({
  type: cancel.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { profile, note } = action.payload;

    return api().delete(`notes/${note.id}`)
    .then(_ => dispatch(cancel.success({ key: profile.id, ...normalize(note, schemas.note) })))
    .catch(err => dispatch(cancel.failed(err)))
    .then(done);
  }
});

export default [ onFetch, onAdd, onCancel ];