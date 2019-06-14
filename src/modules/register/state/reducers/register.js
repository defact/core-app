import { combineReducers } from 'redux'; 
import { register } from '../actions/register';

import { started, completed, error } from '../../../../state/reducers';

export default combineReducers({ 
  started: started(register), 
  completed: completed(register),
  error: error(register) 
});