import { handleActions } from 'redux-actions';
import { sendMessage, sendMessageSuccess, sendMessageFailed } from '../actions/contact';

const initialState = {
  isSending: false,
  error: false,
};

export default handleActions({
  [sendMessage]: (state) => ({ ...state, isSending: true, error: false }),
  [sendMessageFailed]: (state) => ({ ...state, isSending: false, error: true }),
  [sendMessageSuccess]: (state) => ({ ...state, isSending: false, error: false }),
}, initialState);