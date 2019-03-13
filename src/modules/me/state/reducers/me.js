import { combineReducers } from 'redux'; 
import { started, completed, data, id, error } from '../../../../state/reducers';
import { fetch, clear } from '../actions/me';

export default combineReducers({ 
  started: started(fetch), 
  completed: completed(fetch), 
  data: data('members'),
  id: id(fetch, clear),
  error: error(fetch), 
});
