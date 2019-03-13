import { combineReducers } from 'redux'; 
import { started, completed, data, ids, error } from '../../../../../state/reducers';
import { fetch, add, save, remove } from '../actions/users';

export default combineReducers({ 
  started: started(fetch, add, save, remove ), 
  completed: completed(fetch, add, save, remove), 
  data: data('users'),
  ids: ids(fetch, add, remove),
  error: error(fetch, add, save, remove), 
});
