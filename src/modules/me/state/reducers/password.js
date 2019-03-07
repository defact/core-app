import { combineReducers } from 'redux'; 
import { is, has, error } from '../../../../state/reducers';
import { change } from '../actions/password';

export default combineReducers({ 
  isChanging: is(change), 
  hasChanged: has(change), 
  error: error(change), 
});
