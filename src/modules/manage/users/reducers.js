import { combineReducers } from 'redux';

import users from './state/reducers/users';
import profiles from './modules/profiles/state/reducers/profiles';

export default combineReducers({ users, profiles });