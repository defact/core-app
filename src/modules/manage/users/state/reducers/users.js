import { combineReducers } from 'redux'; 
import { started, completed, data, filtered, paged, sorted, ids, error } from '../../../../../state/reducers';
import { fetch, add, save, remove, filter, page, sort } from '../actions/users';

export default combineReducers({ 
  started: started(fetch, add, save, remove ), 
  completed: completed(fetch, add, save, remove), 
  data: data('users'),
  filter: filtered(filter),
  page: paged(page),
  sort: sorted(sort, { property: 'email', ascending: true }),
  ids: ids(fetch, add, remove),
  error: error(fetch, add, save, remove), 
});
