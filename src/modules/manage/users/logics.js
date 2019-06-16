import users from './state/logics/users';
import roles from './modules/roles/state/logics/roles';
import profiles from './modules/profiles/state/logics/profiles';

export default [ ...users, ...roles, ...profiles ];