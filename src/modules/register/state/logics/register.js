import { createLogic } from 'redux-logic';
import { REGISTER, registerSuccess, registerFailed } from '../actions/register';
import { signIn } from '../../../sessions/state/actions/signin';

const onRegister = createLogic({
  type: REGISTER,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().post('memberships', action.payload)
    .then(data => {
      dispatch(registerSuccess(data));
      dispatch(signIn(action.payload));
    })
    .then(done)
    .catch(err => {
      dispatch(registerFailed(err));
    });
  }
});

export default onRegister;