import { combineReducers } from 'redux';

import entities from '../modules/app/state/reducers/entities';

import sessions from '../modules/sessions/reducers';
import register from '../modules/register/reducers';
import me from '../modules/me/reducers';
import manage from '../modules/manage/reducers';
import contact from '../modules/contact/reducers';

export default combineReducers({
  entities: entities(),
  sessions,
  register,
  me,
  manage,
  contact,
});