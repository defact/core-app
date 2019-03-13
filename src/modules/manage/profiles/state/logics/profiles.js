import { createLogic } from 'redux-logic';
import { fetch, add, save, remove } from '../actions/profiles';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('profiles')
    .then(data => normalize(data.profiles, [ schemas.profile ]));
  }
});

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, email, onSuccess, onFailure } = action.payload;

    return api().put(`profiles/${id}`, { email })
    .then(data => dispatch(save.success(normalize(data.profile, schemas.profile))))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(save.failed(err));
    });
  }
});

const onAdd = createLogic({
  type: add.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { email, onSuccess, onFailure } = action.payload;

    return api().post('profiles', { email })
    .then(data => dispatch(add.success(normalize(data.profile, schemas.profile))))
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

  processOptions: {
    dispatchReturn: true,
    successType: remove.success,
    failType: remove.failed
  },

  process({ api, normalize, schemas, action }) {
    return api().delete(`profiles/${action.payload.id}`)
    .then(data => normalize(data.profile, schemas.profile));
  }
});

export default [ onFetch, onSave, onAdd, onRemove ];