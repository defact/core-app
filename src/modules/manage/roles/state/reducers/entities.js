import { combineReducers } from 'redux'; 
import { handleActions } from 'redux-actions';
import { fetchEntities, fetchSuccess, fetchFailed } from '../actions/entities';

const isFetching = handleActions({
  [fetchEntities]: (state) => true,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => false,    
}, false);

const isFetched = handleActions({
  [fetchEntities]: (state) => false,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => true,    
}, false);

const error = handleActions({
  [fetchEntities]: (state) => false,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => { message: action.payload.message },    
}, false);

const ids = handleActions({
  [fetchSuccess]: (state, action) => action.payload.result,    
}, []);

export default combineReducers({ isFetching, isFetched, error, ids });
