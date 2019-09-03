import { createLogic } from 'redux-logic';
import { fetch, add, remove } from '../actions/tags';

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('tags')
    .then(data => normalize(data.tags, [ schemas.tag ]));
  }
});

const onAdd = createLogic({
  type: add.start,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { text, onSuccess, onFailure } = action.payload;

    return api().post('tags', { text })
    .then(data => dispatch(add.success(normalize(data.tag, schemas.tag))))
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
    return api().delete(`tags/${action.payload.id}`)
    .then(data => normalize(data.tag, schemas.tag));
  }
});

export default [ onFetch, onAdd, onRemove ];