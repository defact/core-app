import { schema } from 'normalizr';

const role = new schema.Entity('roles');
const user = new schema.Entity('users', { roles: [ role ] }, {
  processStrategy: (data) => {
    const { isFixed, ...role } = data;
    return { ...role, disabled: isFixed };
  }
});

export default { user };