import sessions from '../modules/sessions/logics';
import user from '../modules/user/logics';
import register from '../modules/register/logics';
// import manage from '../modules/manage/logics';
// import contact from '../modules/contact/logics';

export default [ 
  ...sessions, ...user, ...register
];