import { createAction } from 'redux-actions';

export const show = createAction('flash/SHOW', (type, message, delay) => ({
  message, type, isActive: true, delay, onFinish: dismiss
}), () => ({ queued: true }));

export const info = (message, delay) => show('info', message, delay);
export const warning = (message, delay) => show('warning', message, delay);
export const error = (message, delay) => show('error', message, delay);

export const dismiss = createAction('flash/DISMISS');
