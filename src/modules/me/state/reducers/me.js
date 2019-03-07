import { combineReducers } from 'redux'; 
import { is, has, id, error } from '../../../../state/reducers';
import { fetch, clear } from '../actions/me';

export default combineReducers({ 
  isFetching: is(fetch), 
  hasFetched: has(fetch), 
  id: id(fetch, clear),
  error: error(fetch), 
});
