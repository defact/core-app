import users from './users/logics';
import groups from './groups/logics';
import roles from './roles/logics';
import profiles from './profiles/logics';

export default [ ...roles, ...users, ...groups, ...profiles ];