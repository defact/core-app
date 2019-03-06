import { combineReducers } from 'redux';

import alert from './state/reducers/alert';
import flash from './state/reducers/flash';
import entities from './state/reducers/entities';

export default combineReducers({ alert, flash, entities: entities() });