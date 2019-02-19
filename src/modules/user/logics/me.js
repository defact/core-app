import { createLogic } from 'redux-logic';
import { SIGN_IN_SUCCESS } from '../../sessions/actions/signin';
import { SIGN_OUT_SUCCESS } from '../../sessions/actions/signout';
import { fetchMe, clearMe, FETCH_ME, FETCH_ME_SUCCESS, FETCH_ME_FAILED } from '../actions/me';

const onSignedOn = createLogic({
  type: SIGN_IN_SUCCESS,

  process(_, dispatch, done) {
    dispatch(fetchMe());
    done();
  }
});

const onSignedOut = createLogic({
  type: SIGN_OUT_SUCCESS,

  process(_, dispatch, done) {
    dispatch(clearMe());
    done();
  }
});

const onFetchMe = createLogic({
  type: FETCH_ME,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: FETCH_ME_SUCCESS,
    failType: FETCH_ME_FAILED
  },

  process({ api }) {
    return api().get('membership');
  }
});

export default [ onSignedOn, onSignedOut, onFetchMe ];