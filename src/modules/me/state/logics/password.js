import { createLogic } from 'redux-logic';
import { CHANGE_PASSWORD, changePasswordSuccess, changePasswordFailed } from '../actions/password';

const onChangePassword = createLogic({
  type: CHANGE_PASSWORD,
  latest: true,

  process({ api, normalize, schemas, action, getState }, dispatch, done) {
    const me = getState().me.me;

    const { password, onSuccess, onFailure } = action.payload;

    return api().post(`users/${me.id}/password`, { password })
    
    .then(data => normalize(data.user, schemas.user))
    .then(data => dispatch(changePasswordSuccess(data)))
    .then(onSuccess)
    .then(done)

    .catch(err => {
      dispatch(changePasswordFailed(err));
      onFailure(err);
    });
  }
});

export default onChangePassword;