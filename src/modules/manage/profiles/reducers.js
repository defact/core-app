import { combineReducers } from 'redux';

import profiles from './state/reducers/profiles';

import users from './modules/users/reducers';
import contacts from './modules/contacts/reducers';
// import notes from './modules/notes/reducers';

export default combineReducers({ profiles, users, contacts });