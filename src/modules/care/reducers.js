import { combineReducers } from 'redux';

import patients from './patients/reducers';
import rooms from './rooms/reducers';
import notes from './notes/reducers';

export default combineReducers({ patients, rooms, notes });