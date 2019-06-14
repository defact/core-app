import { createLogic } from 'redux-logic';
import { register } from '../actions/register';
import { signIn } from '../../../sessions/state/actions/signin';

const onRegister = createLogic({
  type: register.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().post('memberships', action.payload)
    .then(data => {
      dispatch(register.success(data));
      dispatch(signIn.start(action.payload));
    })
    .then(done)
    .catch(err => {
      dispatch(register.failed(err));
    });
  }
});

export default onRegister;