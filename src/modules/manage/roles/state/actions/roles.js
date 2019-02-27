import { createAction } from 'redux-actions';

export const FETCH = 'defacto/manage/roles/fetch';
export const FETCH_SUCCESS = 'defacto/manage/roles/fetch/success';
export const FETCH_FAILED = 'defacto/manage/roles/fetch/failed';

export const fetchRoles = createAction(FETCH)
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailed = createAction(FETCH_FAILED);

export const SAVE = 'defacto/manage/roles/save';
export const SAVE_SUCCESS = 'defacto/manage/roles/save/success';
export const SAVE_FAILED = 'defacto/manage/roles/save/failed';

export const save = createAction(SAVE)
export const saveSuccess = createAction(SAVE_SUCCESS);
export const saveFailed = createAction(SAVE_FAILED);
