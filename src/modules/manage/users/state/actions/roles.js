import { createAction } from 'redux-actions';

export const SAVE = 'defacto/manage/users/roles/save';
export const SAVE_SUCCESS = 'defacto/manage/users/roles/save/success';
export const SAVE_FAILED = 'defacto/manage/users/roles/save/failed';

export const save = createAction(SAVE);
export const saveSuccess = createAction(SAVE_SUCCESS);
export const saveFailed = createAction(SAVE_FAILED);
