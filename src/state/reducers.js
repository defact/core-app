import { handleActions } from 'redux-actions';

const noop = () => void(0);

export const start = (action) => handleActions({
  [action.start]: () => true,
  [action.success]: () => false,
  [action.failed]: () => false,
}, false);

export const complete = (action) => handleActions({
  [action.start]: () => false,
  [action.success]: () => true,
  [action.failed]: () => true,
}, false);

export const id = (set, clear = noop) => handleActions({
  [set.success]: (state, action) => action.payload.result,
  [clear]: () => null    
}, null);

export const ids = (set, append = { success: noop }, clear = noop) => handleActions({
  [set.success]: (state, action) => action.payload.result,
  [append.success]: (state, action) => [ ...state, action.payload.result ],
  [clear]: () => []    
}, []);

export const idsByKey = (set, append = { success: noop }, clear = noop) => handleActions({
  [set.success]: (state, action) => ({ ...state, [action.payload.key]: action.payload.result }),
  [append.success]: (state, action) => ({ ...state, [action.payload.key]: [ ...state[action.payload.key], action.payload.result ] }),
  [clear]: (state, action) => ({ ...state, [action.payload.key]: [] })
}, []);

export const error = (...actions) => handleActions(actions.map(action => ({
  [action.start]: () => false,
  [action.success]: () => false,
  [action.failed]: (state, action) => ({ message: action.payload.message }),
})).reduce((memo, next) => ({ ...memo, ...next }), {}), false);
