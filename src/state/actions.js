import { createAction, createActions } from 'redux-actions';

export const async = prefix => createActions({
  START: undefined, SUCCESS: undefined, FAILED: undefined
}, { prefix });

export const sync = (action, ...props) => createAction(action, ...props);