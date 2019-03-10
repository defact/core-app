import { combineReducers } from 'redux'; 
import { start, complete, ids, error } from '../../../../../state/reducers';
import { fetch } from '../actions/entities';

export default combineReducers({ 
  isFetching: start(fetch), 
  isFetched: complete(fetch), 
  ids: ids(fetch),
  error: error(fetch), 
});
