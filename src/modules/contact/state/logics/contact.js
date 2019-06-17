import { createLogic } from 'redux-logic';
import { send } from '../actions/contact';

const onSend = createLogic({
  type: send.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    const { from, message, onSuccess, onFailure } = action.payload;

    return api().post('messages', { from, message, subject: 'Message from defact.io' })
    
    .then(data => dispatch(send.success(data)))
    .then(onSuccess)
    .then(done)

    .catch(err => {
      dispatch(send.failed(err));
      onFailure(err);
    });
  }
});

export default onSend;