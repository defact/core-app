import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';
import { signOut } from '../actions/signout';
import { info } from '../../../app/state/actions/flash';

const onSignOut = createLogic({
  type: signOut.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().delete('session', action.payload)

    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(signOut.success()))
    .then(() => navigate('/'))
    .then(() => dispatch(info('You have successfully signed out')))
    .then(done)

    .catch(err => {
      dispatch(signOut.failed(err));
      navigate('/');
    });
  }
});

export default onSignOut;