import { createAction } from 'redux-actions';

export const SHOW = 'defacto/app/alert/show';
export const CLOSE = 'defacto/app/alert/close';

export const show = createAction(SHOW, (message, type = 'info') => ({ message, type }));
export const close = createAction(CLOSE);
