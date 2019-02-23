import { createAction } from 'redux-actions';

export const FETCH = 'defacto/manage/roles/entities/fetch';
export const FETCH_SUCCESS = 'defacto/manage/roles/entities/fetch/success';
export const FETCH_FAILED = 'defacto/manage/roles/entities/fetch/failed';

export const fetchEntities = createAction(FETCH)
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailed = createAction(FETCH_FAILED);
