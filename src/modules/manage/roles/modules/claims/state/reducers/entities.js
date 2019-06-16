import { combineReducers } from 'redux'; 
import { started, completed, data, ids, error } from '../../../../../../../state/reducers';
import { fetch } from '../actions/entities';

export default combineReducers({ 
  started: started(fetch), 
  started: completed(fetch), 
  data: data('entities'),
  ids: ids(fetch),
  error: error(fetch), 
});
