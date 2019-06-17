import { combineReducers } from 'redux'; 
import { started, completed, error } from '../../../../state/reducers';
import { send } from '../actions/contact';

export default combineReducers({ 
  started: started(send), 
  completed: completed(send), 
  error: error(send), 
});
