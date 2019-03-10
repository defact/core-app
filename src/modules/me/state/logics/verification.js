import { createLogic } from 'redux-logic';
import { resend } from '../actions/verification';

const onResend = createLogic({
  type: resend.start,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: resend.success,
    failType: resend.failed,
  },

  process({ api, getState }) {
    const me = getState().me.me;
    return api().put(`users/${me.id}/code`);
  }
});

export default [ onResend ];