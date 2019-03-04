import { createAction } from 'redux-actions';

export const FETCH = 'defacto/manage/roles/fetch';
export const FETCH_SUCCESS = 'defacto/manage/roles/fetch/success';
export const FETCH_FAILED = 'defacto/manage/roles/fetch/failed';

export const fetch = createAction(FETCH);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailed = createAction(FETCH_FAILED);

export const ADD = 'defacto/manage/roles/add';
export const ADD_SUCCESS = 'defacto/manage/roles/add/success';
export const ADD_FAILED = 'defacto/manage/roles/add/failed';

export const add = createAction(ADD);
export const addSuccess = createAction(ADD_SUCCESS);
export const addFailed = createAction(ADD_FAILED);

export const SAVE = 'defacto/manage/roles/save';
export const SAVE_SUCCESS = 'defacto/manage/roles/save/success';
export const SAVE_FAILED = 'defacto/manage/roles/save/failed';

export const save = createAction(SAVE);
export const saveSuccess = createAction(SAVE_SUCCESS);
export const saveFailed = createAction(SAVE_FAILED);

export const REMOVE = 'defacto/manage/roles/remove';
export const REMOVE_SUCCESS = 'defacto/manage/roles/remove/success';
export const REMOVE_FAILED = 'defacto/manage/roles/remove/failed';

export const remove = createAction(REMOVE);
export const removeSuccess = createAction(REMOVE_SUCCESS);
export const removeFailed = createAction(REMOVE_FAILED);
