import { schema } from 'normalizr';

const group = new schema.Entity('groups', {}, {
  processStrategy: (data) => {
    const { children, ...group } = data;
    return { ...group, groups: children };
  }
});

group.define({ groups: [ group ]});

export default { group };