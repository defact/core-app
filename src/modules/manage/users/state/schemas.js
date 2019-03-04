import { schema } from 'normalizr';

const role = new schema.Entity('roles');
const user = new schema.Entity('users', { 
  roles: [ role ]
});

export default { user };