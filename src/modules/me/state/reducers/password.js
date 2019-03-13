import { combineReducers } from 'redux'; 
import { started, completed, error } from '../../../../state/reducers';
import { change } from '../actions/password';

export default combineReducers({ 
  started: started(change), 
  completed: completed(change), 
  error: error(change), 
});
