import { combineReducers } from 'redux';

import app from '../modules/app/reducers';
import sessions from '../modules/sessions/reducers';
import register from '../modules/register/reducers';
import manage from '../modules/manage/reducers';
import contact from '../modules/contact/reducers';
import me from '../modules/me/reducers';

export default combineReducers({
  app,
  sessions,
  register,
  manage,
  contact,
  me,
});