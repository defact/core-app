import { createLogic } from 'redux-logic';
import { SEND, SEND_SUCCESS, SEND_FAILED } from '../actions/contact';

const onSend = createLogic({
  type: SEND,
  latest: true,

  processOptions: {
    dispatchReturn: true,
    successType: SEND_SUCCESS,
    failType: SEND_FAILED
  },

  process({ api, _, action }) {
    return api().post('messages', action.payload);
  }
});

export default onSend;