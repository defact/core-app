import { createAction } from 'redux-actions';

export const CHANGE = 'defacto/me/change-password';
export const SUCCESS = 'defacto/me/change-password/success';
export const FAILED = 'defacto/me/change-password/failed';

export const change = createAction(CHANGE);
export const success = createAction(SUCCESS);
export const failed = createAction(FAILED);
