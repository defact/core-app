import { combineReducers } from 'redux';

import entities from '../modules/app/reducers/entities';

import sessions from '../modules/sessions/reducers';
import register from '../modules/register/reducers';
import user from '../modules/user/reducers';
// import manage from '../modules/groups/reducers';
// import contact from '../modules/contact/reducers';

export default combineReducers({
  entities: entities(),
  sessions,
  register,
  user,
  // manage,
  // contact,
});