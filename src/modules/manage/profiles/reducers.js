import { combineReducers } from 'redux';

import profiles from './state/reducers/profiles';
import users from './state/reducers/users';

export default combineReducers({ profiles, users });