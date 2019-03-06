import { createLogic } from 'redux-logic';
import { CHANGE, success, failed } from '../actions/password';

const onChangePassword = createLogic({
  type: CHANGE,
  latest: true,

  process({ api, normalize, schemas, action, getState }, dispatch, done) {
    const me = getState().me.me;

    const { password, onSuccess, onFailure } = action.payload;

    return api().post(`users/${me.id}/password`, { password })
    
    .then(data => normalize(data.user, schemas.user))
    .then(data => dispatch(success(data)))
    .then(onSuccess)
    .then(done)

    .catch(err => {
      dispatch(failed(err));
      onFailure(err);
    });
  }
});

export default onChangePassword;