import { schema } from 'normalizr';

const role = new schema.Entity('roles');
const entity = new schema.Entity('entities');
const permission = new schema.Entity('permissions');

export default { role, entity, permission };