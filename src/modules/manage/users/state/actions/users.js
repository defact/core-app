import { createAction } from 'redux-actions';

export const FETCH = 'defacto/manage/users/fetch';
export const FETCH_SUCCESS = 'defacto/manage/users/fetch/success';
export const FETCH_FAILED = 'defacto/manage/users/fetch/failed';

export const fetch = createAction(FETCH);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailed = createAction(FETCH_FAILED);

export const ADD = 'defacto/manage/users/add';
export const ADD_SUCCESS = 'defacto/manage/users/add/success';
export const ADD_FAILED = 'defacto/manage/users/add/failed';

export const add = createAction(ADD);
export const addSuccess = createAction(ADD_SUCCESS);
export const addFailed = createAction(ADD_FAILED);

export const LOCK = 'defacto/manage/users/lock';
export const LOCK_SUCCESS = 'defacto/manage/users/lock/success';
export const LOCK_FAILED = 'defacto/manage/users/lock/failed';

export const lock = createAction(LOCK);
export const lockSuccess = createAction(LOCK_SUCCESS);
export const lockFailed = createAction(LOCK_FAILED);

export const SAVE = 'defacto/manage/users/save';
export const SAVE_SUCCESS = 'defacto/manage/users/save/success';
export const SAVE_FAILED = 'defacto/manage/users/save/failed';

export const save = createAction(SAVE);
export const saveSuccess = createAction(SAVE_SUCCESS);
export const saveFailed = createAction(SAVE_FAILED);

export const REMOVE = 'defacto/manage/users/remove';
export const REMOVE_SUCCESS = 'defacto/manage/users/remove/success';
export const REMOVE_FAILED = 'defacto/manage/users/remove/failed';

export const remove = createAction(REMOVE);
export const removeSuccess = createAction(REMOVE_SUCCESS);
export const removeFailed = createAction(REMOVE_FAILED);

export const SELECT = 'defacto/manage/users/select';

export const select = createAction(SELECT);