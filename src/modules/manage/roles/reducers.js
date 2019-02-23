import { combineReducers } from 'redux';

import roles from './state/reducers/roles';
import permissions from './state/reducers/permissions';
import entities from './state/reducers/entities';

export default combineReducers({ roles, permissions, entities });