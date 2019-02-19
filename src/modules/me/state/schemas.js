import { schema } from 'normalizr';

const profile = new schema.Entity('profiles');
const role = new schema.Entity('roles');
const user = new schema.Entity('users', {
  profiles: [ profile ],
  roles: [ role ],
});
const member = new schema.Entity('members', {
  user,
  profiles: [ profile ],
  profile,
  users: [ user ],
});

export default { profile, role, member, user };