import compact from 'lodash.compact';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetch, fetchSuccess, fetchFailed } from '../actions/users';
import { add, addSuccess, addFailed } from '../actions/users';
import { select } from '../actions/users';

import { rolesSelector } from '../../../roles/state/reducers/roles';
import { constructUser } from '../helpers/users';

const initialState = {
  isFetching: false,
  isFetched: false,
  isSaving: false,
  isSaved: false,
  error: false,
  ids: [],
  id: null,
};

export default handleActions({
  [select]: (state, action) => ({ ...state, id: action.payload }),

  [fetch]: (state) => ({ ...state, isFetching: true, isFetched: false, error: false }),
  [fetchSuccess]: (state, action) =>
    ({ ...state, ids: action.payload.result, isFetching: false, isFetched: true, error: false }),
  [fetchFailed]: (state, action) => 
    ({ ...state, isFetching: false, isFetched: true, error: { message: action.payload.message }}),
  
  [add]: (state) => ({ ...state, isSaving: true, isSaved: false, error: false }),
  [addSuccess]: (state, action) =>
    ({ ...state, ids: [ ...state.ids, action.payload.result ], isSaving: false, isSaved: true, error: false }),
  [addFailed]: (state, action) => 
    ({ ...state, isSaving: false, isSaved: true, error: { message: action.payload.message }}),
    }, initialState);

const dataSelector = state => state.entities.users
const stateSelector = state => state.manage.users.users;

export const userSelector = createSelector(
  dataSelector, stateSelector, (state, props) => props.id, (users = [], state, id) => {
    return ({ ...state, ...users[id || state.id] })
  }
);

export const usersSelector = createSelector(
  dataSelector, stateSelector, (users = [], state) => 
    ({ ...state, users: compact(state.ids.map(id => users[id])) })
);

export const userWithRolesSelector = createSelector(
  dataSelector, rolesSelector, stateSelector, (state, props) => props.id, (users = [], roles, state, id) => 
    ({ ...state, ...constructUser(roles.roles, users[id || state.id]) })
);