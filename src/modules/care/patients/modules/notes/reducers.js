import { combineReducers } from 'redux';

import notes from './state/reducers/notes';
import tags from './state/reducers/tags';

export default combineReducers({ notes, tags });