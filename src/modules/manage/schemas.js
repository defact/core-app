import roles from './roles/state/schemas';
import users from './users/state/schemas';
import groups from './groups/state/schemas';

export default { ...roles, ...users, ...groups };