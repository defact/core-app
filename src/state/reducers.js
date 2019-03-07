import { handleActions } from 'redux-actions';
import { FormatListBulleted } from '@material-ui/icons';

export const is = (action) => handleActions({
  [action.start]: () => true,
  [action.success]: () => false,
  [action.failed]: () => false,
}, false);

export const has = (action) => handleActions({
  [action.start]: () => false,
  [action.success]: () => true,
  [action.failed]: () => true,
}, false);

export const ids = (fetch, add) => {
  return (add === undefined)
  ? handleActions({
      [fetch.success]: (state, action) => action.payload.result,
    }, [])
  : handleActions({
      [fetch.success]: (state, action) => action.payload.result,    
      [add.success]: (state, action) => [ ...state, action.payload.result ],
    }, []);
};

export const error = (...actions) => handleActions(actions.map(action => ({
  [action.start]: () => false,
  [action.success]: () => false,
  [action.failed]: (state, action) => ({ message: action.payload.message }),
})).reduce((memo, next) => ({ ...memo, ...next }), {}), false);
