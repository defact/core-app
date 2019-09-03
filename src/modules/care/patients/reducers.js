import { combineReducers } from 'redux';

import profiles from './state/reducers/profiles';

import users from './modules/users/reducers';
import contacts from './modules/contacts/reducers';
import photos from './modules/photos/reducers';
import notes from './modules/notes/reducers';

export default combineReducers({ profiles, users, contacts, photos, notes });