import { combineReducers } from 'redux';

import me from './state/reducers/me';
import password from './state/reducers/password';

export default combineReducers({ me, password });