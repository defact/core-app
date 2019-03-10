import { combineReducers } from 'redux'; 
import { start, complete, idsByKey, error } from '../../../../../state/reducers';
import { fetch } from '../actions/profiles';

export default combineReducers({ 
  isFetching: start(fetch), 
  isFetched: complete(fetch), 
  ids: idsByKey(fetch),
  error: error(fetch), 
});
