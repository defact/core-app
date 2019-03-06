import { combineReducers } from 'redux'; 
import { handleActions } from 'redux-actions';
import { fetchPermissions, fetchSuccess, fetchFailed } from '../actions/permissions';

const isFetching = handleActions({
  [fetchPermissions]: (state) => true,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => false,    
}, false);

const isFetched = handleActions({
  [fetchPermissions]: (state) => false,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => true,    
}, false);

const error = handleActions({
  [fetchPermissions]: (state) => false,
  [fetchSuccess]: (state) => false,
  [fetchFailed]: (state) => ({ message: action.payload.message }),    
}, false);

const ids = handleActions({
  [fetchSuccess]: (state, action) => action.payload.result,    
}, []);

export default combineReducers({ isFetching, isFetched, error, ids });
