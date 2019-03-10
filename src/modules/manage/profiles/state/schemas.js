import { schema } from 'normalizr';

const profile = new schema.Entity('profiles', {}, {
  processStrategy: (data) => {
    const { isFixed, ...role } = data;
    return { ...role, disabled: isFixed };
  }
});

export default { profile };