import { combineReducers } from 'redux'; 
import { started, completed, data, idsByKey, error } from '../../../../../../../state/reducers';
import { fetch, add, cancel } from '../actions/notes';

export default combineReducers({ 
  started: started(fetch), 
  completed: completed(fetch), 
  data: data('notes'),
  ids: idsByKey(fetch, add, cancel),
  error: error(fetch, cancel), 
});
