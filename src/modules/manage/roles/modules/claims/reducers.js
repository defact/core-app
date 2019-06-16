import { combineReducers } from 'redux';

import permissions from './state/reducers/permissions';
import entities from './state/reducers/entities';

export default combineReducers({ permissions, entities });