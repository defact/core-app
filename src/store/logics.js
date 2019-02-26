import sessions from '../modules/sessions/logics';
import me from '../modules/me/logics';
import register from '../modules/register/logics';
import manage from '../modules/manage/logics';
import contact from '../modules/contact/logics';

export default [ 
  ...sessions, ...me, ...register, ...manage, ...contact
];