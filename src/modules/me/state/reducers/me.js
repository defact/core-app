import { combineReducers } from 'redux'; 
import { start, complete, id, error } from '../../../../state/reducers';
import { fetch, clear } from '../actions/me';

export default combineReducers({ 
  isFetching: start(fetch), 
  hasFetched: complete(fetch), 
  id: id(fetch, clear),
  error: error(fetch), 
});
