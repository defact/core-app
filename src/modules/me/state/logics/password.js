import { createLogic } from 'redux-logic';
import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED } from '../actions/password';
import { fetchMeSuccess } from '../actions/me';

const onChangePassword = createLogic({
  type: CHANGE_PASSWORD,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: CHANGE_PASSWORD_SUCCESS,
    failType: CHANGE_PASSWORD_FAILED
  },

  process({ api, normalize, schemas, action, getState }) {
    const me = getState().me.me;

    return api().post(`users/${me.id}/password`, action.payload).then(data => {
      return normalize(data.user, schemas.user);
    });
  }
});

// Temporary until normalizr
const onChangedPassword = createLogic({
  type: CHANGE_PASSWORD_SUCCESS,

  process({ action }, dispatch, done) {
    dispatch(fetchMeSuccess(action.payload));
    done();
  }
});

export default [ onChangePassword, onChangedPassword ];