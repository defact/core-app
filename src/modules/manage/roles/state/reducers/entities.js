import { combineReducers } from 'redux'; 
import { is, has, ids, error } from '../../../../../state/reducers';
import { fetch } from '../actions/entities';

export default combineReducers({ 
  isFetching: is(fetch), 
  isFetched: has(fetch), 
  ids: ids(fetch),
  error: error(fetch), 
});
