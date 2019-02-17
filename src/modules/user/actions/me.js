import { createAction } from 'redux-actions';

export const FETCH_ME = 'defacto/user/fetch-me';
export const FETCH_ME_SUCCESS = 'defacto/user/fetch-me/success';
export const FETCH_ME_FAILED = 'defacto/user/fetch-me/failed';

export const fetchMe = createAction(FETCH_ME)
export const fetchMeSuccess = createAction(FETCH_ME_SUCCESS);
export const fetchMeFailed = createAction(FETCH_ME_FAILED);

export const CLEAR_ME = 'defacto/user/clear-me';

export const clearMe = createAction(CLEAR_ME)
