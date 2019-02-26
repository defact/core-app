import { createLogic } from 'redux-logic';
import { SEND, sendSuccess, sendFailed } from '../actions/contact';

const onSend = createLogic({
  type: SEND,
  latest: true,

  process({ api, action }, dispatch, done) {
    const { from, message, onSuccess, onFailure } = action.payload;

    return api().post('messages', { from, message, subject: 'Message from defact.io' })
    
    .then(data => dispatch(sendSuccess(data)))
    .then(onSuccess)
    .then(done)

    .catch(err => {
      dispatch(sendFailed(err));
      onFailure(err);
    });
  }
});

export default onSend;