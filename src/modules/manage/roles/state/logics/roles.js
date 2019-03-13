import { createLogic } from 'redux-logic';
import { fetch, add, save, remove } from '../actions/roles';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('roles').then(data => {
      return normalize(data.roles, [ schemas.role ]);
    });
  }
});

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, name, claims, onSuccess, onFailure } = action.payload;

    return api().put(`roles/${id}`, { name, claims })
    .then(data => dispatch(save.success(normalize(data.role, schemas.role))))
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
    const { name, claims, onSuccess, onFailure } = action.payload;

    return api().post('roles', { name, claims })
    .then(data => dispatch(add.success(normalize(data.role, schemas.role))))
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
    return api().delete(`roles/${action.payload.id}`)
    .then(data => normalize(data.role, schemas.role));
  }
});

export default [ onFetch, onSave, onAdd, onRemove ];