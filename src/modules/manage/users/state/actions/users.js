import { async, data } from '../../../../../state/actions';

export const fetch = async('users/fetch');
export const add = async('users/add');
export const save = async('users/save');
export const lock = async('users/lock');
export const reset = async('users/reset-password');
export const password = async('users/change-password');
export const remove = async('users/remove');

export const { sort, filter, page } = data('users');