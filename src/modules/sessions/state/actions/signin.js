import { createAction } from 'redux-actions';

export const SIGN_IN = 'defacto/sessions/sign-in';
export const SIGN_IN_SUCCESS = 'defacto/sessions/sign-in/success';
export const SIGN_IN_FAILED = 'defacto/sessions/sign-in/failed';

export const signIn = createAction(SIGN_IN);
export const signInSuccess = createAction(SIGN_IN_SUCCESS);
export const signInFailed = createAction(SIGN_IN_FAILED);

export const verify = createAction(SIGN_IN, code => ({ code, strategy: 'code' }));
