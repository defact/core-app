import { combineReducers } from 'redux';

import alert from './state/reducers/alert';
import flash from './state/reducers/flash';

export default combineReducers({ alert, flash });