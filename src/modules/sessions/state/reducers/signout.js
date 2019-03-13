import { combineReducers } from 'redux'; 
import { signOut } from '../actions/signout';

import { started, completed, error } from '../../../../state/reducers';

export default combineReducers({ 
  started: started(signOut), 
  completed: completed(signOut),
  error: error(signOut) 
});