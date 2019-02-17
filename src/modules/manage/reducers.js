import { combineReducers } from 'redux';

import users from './users/reducers';
import groups from './groups/reducers';
import roles from './roles/reducers';

export default combineReducers({ users, groups, roles });