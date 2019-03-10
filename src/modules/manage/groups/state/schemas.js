import { schema } from 'normalizr';

const group = new schema.Entity('groups', {}, {
  processStrategy: (data) => {
    const { children, isFixed, ...group } = data;
    return { ...group, groups: children, disabled: isFixed };
  }
});

group.define({ groups: [ group ]});

export default { group };