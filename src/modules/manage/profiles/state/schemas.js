import { schema } from 'normalizr';

const contact = new schema.Entity('contacts');
const note = new schema.Entity('notes');
const classifier = new schema.Entity('classifiers');

const profile = new schema.Entity('profiles', { 
  contacts: [ contact ],
  notes: [ note ],
}, {
  processStrategy: (data) => {
    const { isFixed, ...role } = data;
    return { ...role, disabled: isFixed };
  }
});

export default { profile, contact, classifier };