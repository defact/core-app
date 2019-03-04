import { createLogic } from 'redux-logic';
import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/users';
import { SAVE, saveSuccess, saveFailed } from '../actions/users';
import { ADD, addSuccess, addFailed } from '../actions/users';
import { LOCK, LOCK_SUCCESS, LOCK_FAILED } from '../actions/users';

const onFetch = createLogic({
  type: FETCH,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FETCH_SUCCESS,
    failType: FETCH_FAILED
  },

  process({ api, normalize, schemas }) {
    return api().get('users')
    .then(data => normalize(data.users, [ schemas.user ]));
  }
});

const onSave = createLogic({
  type: SAVE,
  latest: true,

  process({ api, normalize, schemas, action }, dispatch, done) {
    const { id, email, onSuccess, onFailure } = action.payload;

    return api().put(`users/${id}`, { email })
    .then(data => dispatch(saveSuccess(normalize(data.user, schemas.user))))
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
    const { email, onSuccess, onFailure } = action.payload;

    return api().post('users', { email })
    .then(data => dispatch(addSuccess(normalize(data.user, schemas.user))))
    .then(onSuccess)
    .then(done)
    .catch(err => {
      onFailure(err);
      dispatch(addFailed(err));
    });
  }
});


const onLock = createLogic({
  type: LOCK,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: LOCK_SUCCESS,
    failType: LOCK_FAILED
  },

  process({ api, normalize, schemas, action }) {
    return api().post(`users/${action.payload.id}/lock`)
    .then(data => normalize(data.user, schemas.user));
  }
});

export default [ onFetch, onSave, onAdd, onLock ];