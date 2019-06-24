import { schema } from 'normalizr';

const contact = new schema.Entity('contacts');
const classifier = new schema.Entity('classifiers');
const photo = new schema.Entity('photos');
const note = new schema.Entity('notes');

const profile = new schema.Entity('profiles', {}, {
  processStrategy: (data) => {
    const { isFixed, ...role } = data;
    return { ...role, disabled: isFixed };
  }
});

export default { profile, photo, note, contact, classifier };