import profiles from './state/logics/profiles';

import users from './modules/users/logics';
import contacts from './modules/contacts/logics';
import photos from './modules/photos/logics';
// import notes from './modules/notes/logics';

export default [ ...profiles, ...users, ...contacts, ...photos ];