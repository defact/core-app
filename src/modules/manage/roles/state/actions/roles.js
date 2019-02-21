import { createAction } from 'redux-actions';

export const FETCH = 'defacto/manage/roles/fetch';
export const FETCH_SUCCESS = 'defacto/manage/roles/fetch/success';
export const FETCH_FAILED = 'defacto/manage/roles/fetch/failed';

export const fetch = createAction(FETCH)
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailed = createAction(FETCH_FAILED);
