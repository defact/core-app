import { createLogic } from 'redux-logic';
import { resend } from '../actions/verification';
import { warning } from '../../../app/state/actions/flash';

const onResend = createLogic({
  type: resend.start,
  latest: true,

  process({ api, getState }, dispatch, done) {
    const me = getState().me.me;

    return api().post(`users/${me.email}/code`)

    .then(() => dispatch(resend.success()))
    .then(() => dispatch(warning('An email has been sent - check your inbox')))
    .then(done)

    .catch(err => {
      dispatch(resend.failed(err));
    });
  }
});

export default [ onResend ];