import { createLogic } from 'redux-logic';
import { change, reset } from '../actions/password';

const onChange = createLogic({
  type: change.start,
  latest: true,

  process({ api, normalize, schemas, action, getState }, dispatch, done) {
    const me = getState().me.me;

    const { password, onSuccess, onFailure } = action.payload;

    return api().post(`users/${me.id}/password`, { password })
    
    .then(data => normalize(data.user, schemas.user))
    .then(data => dispatch(change.success(data)))
    .then(onSuccess)
    .then(done)

    .catch(err => {
      dispatch(change.failed(err));
      onFailure(err);
    });
  }
});

export default [ onChange ];