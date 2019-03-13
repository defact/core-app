import merge from 'lodash.mergewith';
import isArray from 'lodash.isarray';
import { handleActions } from 'redux-actions';

const noop = () => void(0);

export const started = (...actions) => handleActions(actions.map(action => ({
  [action.start]: () => true,
  [action.success]: () => false,
  [action.failed]: () => false,
})).reduce((memo, next) => ({ ...memo, ...next }), {}), false);

export const completed = (...actions) => handleActions(actions.map(action => ({
  [action.start]: () => false,
  [action.success]: () => true,
  [action.failed]: () => true,
})).reduce((memo, next) => ({ ...memo, ...next }), {}), false);

export const id = (set, clear = noop) => handleActions({
  [set.success]: (state, action) => action.payload.result,
  [clear]: () => null    
}, null);

export const ids = (set, append = { success: noop }, remove = { success: noop }, clear = noop) => handleActions({
  [set.success]: (state, action) => action.payload.result,
  [append.success]: (state, action) => [ ...state, action.payload.result ],
  [remove.success]: (state, action) => state.filter(id => id !== action.payload.result),
  [clear]: () => []
}, []);

export const idsByKey = (set, append = { success: noop }, remove = { success: noop }, clear = noop) => handleActions({
  [set.success]: (state, action) => ({ ...state, [action.payload.key]: action.payload.result }),
  [append.success]: (state, action) => ({ ...state, [action.payload.key]: [ ...state[action.payload.key], action.payload.result ] }),
  [remove.success]: (state, action) => ({ ...state, [action.payload.key]: state[action.payload.key].filter(id => id !== action.payload.result) }),
  [clear]: (state, action) => ({ ...state, [action.payload.key]: [] })
}, []);

export const error = (...actions) => handleActions(actions.map(action => ({
  [action.start]: () => false,
  [action.success]: () => false,
  [action.failed]: (state, action) => ({ message: action.payload.message }),
})).reduce((memo, next) => ({ ...memo, ...next }), {}), false);

export const data = (entity) => {
  return (state = {}, action) => {
    if (action.type === 'sessions/signout/SUCCESS') return {};

    if (action && action.payload && action.payload.entities && action.payload.entities[entity]) {
      return merge({}, state, action.payload.entities[entity], (o, src) => {
        if (isArray(o)) return src; // overwrite arrays
      });
    }
    return state;
  }
};
