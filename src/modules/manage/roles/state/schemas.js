import { schema } from 'normalizr';

const role = new schema.Entity('roles', {}, {
  processStrategy: (data) => {
    const { isFixed, ...role } = data;
    return { ...role, disabled: isFixed };
  }
});

const entity = new schema.Entity('entities');
const permission = new schema.Entity('permissions');

export default { role, entity, permission };