import { createActions } from 'redux-actions';

export const async = prefix => createActions({
  START: undefined, SUCCESS: undefined, FAILED: undefined
}, { prefix });
