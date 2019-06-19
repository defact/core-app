import { createAction, createActions } from 'redux-actions';

export const async = prefix => createActions({
  START: undefined, SUCCESS: undefined, FAILED: undefined
}, { prefix });

export const sync = (action, ...props) => createAction(action, ...props);

export const data = prefix => ({
  sort: createActions({ ASC: undefined, DESC: undefined }, { prefix: `${prefix}/sort` }),
  filter: createAction(`${prefix}/filter`, (property, value) => ({ property, value })),
  page: createAction(`${prefix}/page`, (skip, limit) => ({ skip, limit })),
});