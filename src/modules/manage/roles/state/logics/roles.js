import { createLogic } from 'redux-logic';
import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/roles';
import { SAVE, saveSuccess, saveFailed } from '../actions/roles';
import { ADD, addSuccess, addFailed } from '../actions/roles';

const onFetch = createLogic({
  type: FETCH,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FETCH_SUCCESS,
    failType: FETCH_FAILED
  },

  process({ api, normalize, schemas }) {
    return api().get('roles').then(data => {
      return normalize(data.roles, [ schemas.role ]);
    });
  }
});

const onSave = createLogic({
  type: SAVE,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, name, claims, onSuccess, onFailure } = action.payload;

    return api().put(`roles/${id}`, { name, claims })
    .then(data => dispatch(saveSuccess(normalize(data.role, schemas.role))))
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
    const { name, claims, onSuccess, onFailure } = action.payload;

    return api().post('roles', { name, claims })
    .then(data => dispatch(addSuccess(normalize(data.role, schemas.role))))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(addFailed(err));
    });
  }
});

export default [ onFetch, onSave, onAdd ];