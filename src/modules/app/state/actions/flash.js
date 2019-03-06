import { createAction } from 'redux-actions';

export const SHOW = 'defacto/app/flash/show';
export const DISMISS = 'defacto/app/flash/dismiss';

export const dismiss = createAction(DISMISS);

export const show = createAction(SHOW, (type, message, delay) => ({
  message, type, isActive: true, delay, onFinish: dismiss
}), () => ({ queued: true }));

export const info = (message, delay) => show('info', message, delay);
export const warning = (message, delay) => show('warning', message, delay);
export const error = (message, delay) => show('error', message, delay);
