import { createAction } from 'redux-actions';

export const show = createAction('alert/SHOW', (message, type = 'info') => ({ message, type }));
export const close = createAction('alert/CLOSE');
