import { combineReducers } from 'redux'; 
import { started, completed, data, ids, error } from '../../../../../../../state/reducers';
import { fetch, add, remove } from '../actions/tags';

export default combineReducers({ 
  started: started(fetch), 
  completed: completed(fetch), 
  data: data('tags'),
  ids: ids(fetch, add, remove),
  error: error(fetch, remove), 
});
