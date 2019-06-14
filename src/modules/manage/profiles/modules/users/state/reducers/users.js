import { combineReducers } from 'redux'; 
import { started, completed, idsByKey, error } from '../../../../../../../state/reducers';
import { fetch } from '../actions/users';

export default combineReducers({ 
  started: started(fetch), 
  completed: completed(fetch), 
  ids: idsByKey(fetch),
  error: error(fetch), 
});
