import users from './state/logics/users';
import roles from './state/logics/roles';
import profiles from './state/logics/profiles';

export default [ ...users, ...roles, ...profiles ];