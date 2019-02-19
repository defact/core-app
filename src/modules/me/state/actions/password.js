import { createAction } from 'redux-actions';

export const CHANGE_PASSWORD = 'defacto/me/change-password';
export const CHANGE_PASSWORD_SUCCESS = 'defacto/me/change-password/success';
export const CHANGE_PASSWORD_FAILED = 'defacto/me/change-password/failed';

export const changePassword = createAction(CHANGE_PASSWORD)
export const changePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS);
export const changePasswordFailed = createAction(CHANGE_PASSWORD_FAILED);
