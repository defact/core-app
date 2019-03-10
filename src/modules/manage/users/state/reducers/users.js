import { combineReducers } from 'redux'; 
import { start, complete, ids, error } from '../../../../../state/reducers';
import { fetch, add } from '../actions/users';

export default combineReducers({ 
  isFetching: start(fetch), 
  isFetched: complete(fetch), 
  isAdding: start(add), 
  isAdded: complete(add), 
  ids: ids(fetch, add),
  error: error(fetch, add), 
});
