import { combineReducers } from 'redux'; 
import { started, completed, data, ids, error } from '../../../../../state/reducers';
import { fetch } from '../actions/notes';

export default combineReducers({ 
  started: started(fetch), 
  completed: completed(fetch), 
  data: data('notes'),
  ids: ids(fetch),
  error: error(fetch), 
});
