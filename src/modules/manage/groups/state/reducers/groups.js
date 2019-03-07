import { combineReducers } from 'redux'; 
import { is, has, ids, error } from '../../../../../state/reducers';
import { fetch, add } from '../actions/groups';

export default combineReducers({ 
  isFetching: is(fetch), 
  isFetched: has(fetch), 
  isAdding: is(add), 
  isAdded: has(add), 
  ids: ids(fetch, add),
  error: error(fetch, add), 
});
