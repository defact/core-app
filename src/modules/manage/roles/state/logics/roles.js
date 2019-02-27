import { createLogic } from 'redux-logic';
import { FETCH, FETCH_SUCCESS, FETCH_FAILED, SAVE, saveSuccess, saveFailed } from '../actions/roles';

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

export default [ onFetch, onSave ];