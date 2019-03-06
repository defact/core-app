import { combineReducers } from 'redux'; 
import { handleActions } from 'redux-actions';
import { fetch, fetchSuccess, fetchFailed } from '../actions/groups';
import { add, addSuccess, addFailed } from '../actions/groups';

const isFetching = handleActions({
  [fetch]: (state) => true,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => false,    
}, false);

const isFetched = handleActions({
  [fetch]: (state) => false,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => true,    
}, false);

const isSaving = handleActions({
  [add]: (state) => true,
  [addSuccess]: (state) => false,
  [addFailed]: (state) => false,    
}, false);

const isSaved = handleActions({
  [add]: (state) => false,
  [addSuccess]: (state) => false,
  [addFailed]: (state) => true,    
}, false);

const error = handleActions({
  [add]: (state) => false,
  [addSuccess]: (state) => false,
  [addFailed]: (state) => { message: action.payload.message },    
  [fetch]: (state) => false,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => { message: action.payload.message },    
}, false);

const ids = handleActions({
  [addSuccess]: (state, action) => [ ...state.ids, action.payload.result ],
  [fetchSuccess]: (state, action) => action.payload.result,    
}, []);

export default combineReducers({ isFetching, isFetched, isSaving, isSaved, error, ids });
