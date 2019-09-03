import app from '../modules/app/logics';
import sessions from '../modules/sessions/logics';
import register from '../modules/register/logics';
import manage from '../modules/manage/logics';
import care from '../modules/care/logics';
import contact from '../modules/contact/logics';
import me from '../modules/me/logics';

export default [ 
  ...app, ...sessions, ...me, ...register, ...manage, ...care, ...contact
];