import { schema } from 'normalizr';

const profile = new schema.Entity('profiles');
const role = new schema.Entity('roles');
const user = new schema.Entity('users', {
  roles: [ role ],
});

const member = new schema.Entity('members', {
  user,
  users: [ user ],
  primaryUser: user,
  profile,
  profiles: [ profile ],
  primaryProfile: profile,
});

export default { profile, member };