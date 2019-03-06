import { createLogic } from 'redux-logic';
import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/groups';
import { SAVE, saveSuccess, saveFailed } from '../actions/groups';
import { ADD, addSuccess, addFailed } from '../actions/groups';

const onFetch = createLogic({
  type: FETCH,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FETCH_SUCCESS,
    failType: FETCH_FAILED
  },

  process({ api, normalize, schemas }) {
    return api().get('groups').then(data => {
      return normalize(data.groups, [ schemas.group ]);
    });
  }
});

const onSave = createLogic({
  type: SAVE,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, name, onSuccess, onFailure } = action.payload;

    return api().put(`groups/${id}`, { name })
    .then(data => dispatch(saveSuccess(normalize(data.group, schemas.group))))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(saveFailed(err));
    });
  }
});

const onAdd = createLogic({
  type: ADD,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { name, onSuccess, onFailure } = action.payload;

    return api().post('groups', { name })
    .then(data => dispatch(addSuccess(normalize(data.group, schemas.group))))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(addFailed(err));
    });
  }
});

export default [ onFetch, onSave, onAdd ];