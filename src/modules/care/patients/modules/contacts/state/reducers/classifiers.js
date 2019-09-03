import { combineReducers } from 'redux'; 
import { started, completed, data, ids, error } from '../../../../../../../state/reducers';
import { fetch } from '../actions/classifiers';

export default combineReducers({ 
  started: started(fetch), 
  started: completed(fetch), 
  data: data('classifiers'),
  ids: ids(fetch),
  error: error(fetch), 
});
