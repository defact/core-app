import { combineReducers } from 'redux'; 
import { started, completed, data, idsByKey, error } from '../../../../../../../state/reducers';
import { fetch, add, remove } from '../actions/contacts';

export default combineReducers({ 
  started: started(fetch), 
  completed: completed(fetch), 
  data: data('contacts'),
  ids: idsByKey(fetch, add, remove),
  error: error(fetch, remove), 
});
