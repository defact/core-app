import { combineReducers } from 'redux'; 
import { reset } from '../actions/reset';

import { started, completed, error } from '../../../../state/reducers';

export default combineReducers({ 
  started: started(reset), 
  completed: completed(reset),
  error: error(reset) 
});