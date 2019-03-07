import { createLogic } from 'redux-logic';
import { signIn } from '../../../sessions/state/actions/signin';
import { signOut } from '../../../sessions/state/actions/signout';
import { fetch, clear } from '../actions/me';

const onSignedOn = createLogic({
  type: signIn.success,

  process(_, dispatch, done) {
    dispatch(fetch.start());
    done();
  }
});

const onSignedOut = createLogic({
  type: signOut.success,

  process(_, dispatch, done) {
    dispatch(clear());
    done();
  }
});

const onFetch = createLogic({
  type: fetch.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: fetch.success,
    failType: fetch.failed
  },

  process({ api, normalize, schemas }) {
    return api().get('membership').then(data => {
      return normalize(data.member, schemas.member);
    });
  }
});

export default [ onSignedOn, onSignedOut, onFetch ];