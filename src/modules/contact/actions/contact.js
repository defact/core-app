import { createAction } from 'redux-actions';

export const SEND = 'defacto/contact/send';
export const SEND_SUCCESS = 'defacto/contact/send/success';
export const SEND_FAILED = 'defacto/contact/send/failed';

export const send = createAction(SEND, ({ email, message }) => ({ email, message }));
export const sendSuccess = createAction(SEND_SUCCESS);
export const sendFailed = createAction(SEND_FAILED);
