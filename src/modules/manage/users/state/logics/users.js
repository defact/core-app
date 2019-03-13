import { createLogic } from 'redux-logic';
import { fetch, add, save, lock, remove, reset } from '../actions/users';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('users')
    .then(data => normalize(data.users, [ schemas.user ]));
  }
});

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, email, onSuccess, onFailure } = action.payload;

    return api().put(`users/${id}`, { email })
    .then(data => dispatch(save.success(normalize(data.user, schemas.user))))
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

    return api().post('users', { email })
    .then(data => dispatch(add.success(normalize(data.user, schemas.user))))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(add.failed(err));
    });
  }
});

const onLock = createLogic({
  type: lock.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: lock.success,
    failType: lock.failed
  },

  process({ api, normalize, schemas, action }) {
    return api().post(`users/${action.payload.id}/lock`)
    .then(data => normalize(data.user, schemas.user));
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
    return api().delete(`users/${action.payload.id}`)
    .then(data => normalize(data.user, schemas.user));
  }
});

const onResetPassword = createLogic({
  type: reset.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: reset.success,
    failType: reset.failed
  },

  process({ api, action }) {
    return api().delete(`users/${action.payload.id}/password`);
  }
});

export default [ onFetch, onSave, onAdd, onLock, onRemove, onResetPassword ];