import { handleActions } from 'redux-actions';
import { send, sendSuccess, sendFailed } from '../actions/contact';

const initialState = {
  isSending: false,
  error: false,
};

export default handleActions({
  [send]: (state) => ({ ...state, isSending: true, error: false }),
  [sendFailed]: (state) => ({ ...state, isSending: false, error: true }),
  [sendSuccess]: (state) => ({ ...state, isSending: false, error: false }),
}, initialState);