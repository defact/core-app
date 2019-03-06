import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';
import { SIGN_OUT, signOutSuccess, signOutFailed } from '../actions/signout';
import { info, warning, error } from '../../../app/state/actions/flash';

const onSignOut = createLogic({
  type: SIGN_OUT,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().delete('session', action.payload)

    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(signOutSuccess()))
    .then(() => navigate('/'))
    .then(() => dispatch(info('You have signed out')))
    .then(done)

    .catch(err => {
      dispatch(signOutFailed(err));
      navigate('/');
    });
  }
});

export default onSignOut;