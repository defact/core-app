import { createAction } from 'redux-actions';

export const REGISTER = 'defacto/register';
export const REGISTER_SUCCESS = 'defacto/register/success';
export const REGISTER_FAILED = 'defacto/register/failed';

export const register = createAction(REGISTER, 
  ({ name, email, password }) => ({ name, email, password }));
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFailed = createAction(REGISTER_FAILED);
