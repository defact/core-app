import { combineReducers } from 'redux';

// import members from './members/reducers';
import users from './users/reducers';
// import groups from './groups/reducers';
import roles from './roles/reducers';

export default combineReducers({ roles, users });