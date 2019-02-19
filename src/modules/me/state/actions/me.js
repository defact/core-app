import { createAction } from 'redux-actions';

export const FETCH_ME = 'defacto/me/fetch-me';
export const FETCH_ME_SUCCESS = 'defacto/me/fetch-me/success';
export const FETCH_ME_FAILED = 'defacto/me/fetch-me/failed';

export const fetchMe = createAction(FETCH_ME)
export const fetchMeSuccess = createAction(FETCH_ME_SUCCESS);
export const fetchMeFailed = createAction(FETCH_ME_FAILED);

export const CLEAR_ME = 'defacto/me/clear-me';

export const clearMe = createAction(CLEAR_ME)
