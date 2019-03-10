import { combineReducers } from 'redux'; 
import { start, complete, error } from '../../../../state/reducers';
import { change } from '../actions/password';

export default combineReducers({ 
  isChanging: start(change), 
  hasChanged: complete(change), 
  error: error(change), 
});
