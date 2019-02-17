import { combineReducers } from 'redux';

import me from './me';
import password from './password';

export default combineReducers({ me, password });