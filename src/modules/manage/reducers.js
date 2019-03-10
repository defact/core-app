import { combineReducers } from 'redux';

import profiles from './profiles/reducers';
import users from './users/reducers';
import groups from './groups/reducers';
import roles from './roles/reducers';

export default combineReducers({ roles, users, groups, profiles });