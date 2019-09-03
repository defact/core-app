import { combineReducers } from 'redux';

import contacts from './state/reducers/contacts';
import classifiers from './state/reducers/classifiers';

export default combineReducers({ contacts, classifiers });