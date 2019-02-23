import { createAction } from 'redux-actions';

export const FETCH = 'defacto/manage/roles/permissions/fetch';
export const FETCH_SUCCESS = 'defacto/manage/roles/permissions/fetch/success';
export const FETCH_FAILED = 'defacto/manage/roles/permissions/fetch/failed';

export const fetchPermissions = createAction(FETCH)
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailed = createAction(FETCH_FAILED);
