import { createLogic } from 'redux-logic';
import { fetch, add, save, remove } from '../actions/groups';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('groups').then(data => {
      return normalize(data.groups, [ schemas.group ]);
    });
  }
});

const onSave = createLogic({
  type: save.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, name, onSuccess, onFailure } = action.payload;

    return api().put(`groups/${id}`, { name })
    .then(data => dispatch(save.success(normalize(data.group, schemas.group))))
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
    const { name, onSuccess, onFailure } = action.payload;

    return api().post('groups', { name })
    .then(data => dispatch(add.success(normalize(data.group, schemas.group))))
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
    return api().delete(`groups/${action.payload.id}`)
    .then(data => normalize(data.group, schemas.group));
  }
});

export default [ onFetch, onSave, onAdd, onRemove ];