import { createAction } from 'redux-actions';

export const CHANGE_PASSWORD = 'defacto/user/change-password';
export const CHANGE_PASSWORD_SUCCESS = 'defacto/user/change-password/success';
export const CHANGE_PASSWORD_FAILED = 'defacto/user/change-password/failed';

export const changePassword = createAction(CHANGE_PASSWORD)
export const changePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS);
export const changePasswordFailed = createAction(CHANGE_PASSWORD_FAILED);
