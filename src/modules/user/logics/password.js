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

  process({ api, action, getState }) {
    const user = getState().user.me;

    return api().post(`users/${user.id}/password`, action.payload);
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