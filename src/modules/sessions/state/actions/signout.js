import { createAction } from 'redux-actions';

export const SIGN_OUT = 'defacto/sessions/sign-out';
export const SIGN_OUT_SUCCESS = 'defacto/sessions/sign-out/success';
export const SIGN_OUT_FAILED = 'defacto/sessions/sign-out/failed';

export const signOut = createAction(SIGN_OUT);
export const signOutSuccess = createAction(SIGN_OUT_SUCCESS);
export const signOutFailed = createAction(SIGN_OUT_FAILED);
