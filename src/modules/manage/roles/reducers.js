import { combineReducers } from 'redux';

import roles from './state/reducers/roles';
import claims from './modules/claims/reducers';

export default combineReducers({ roles, claims });