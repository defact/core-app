import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';
import { SIGN_OUT, signOutSuccess, signOutFailed } from '../actions/signout';

const onSignOut = createLogic({
  type: SIGN_OUT,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().delete('session', action.payload)

    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(signOutSuccess()))
    .then(() => navigate('/'))
    .then(done)

    .catch(err => {
      dispatch(signOutFailed(err));
      navigate('/');
    });
  }
});

export default onSignOut;