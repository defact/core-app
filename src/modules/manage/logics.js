import users from './users/logics';
import groups from './groups/logics';
import roles from './roles/logics';

export default [ ...users, ...groups, ...roles ];