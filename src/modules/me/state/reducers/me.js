import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { fetchMe, fetchMeSuccess, fetchMeFailed, clearMe } from '../actions/me';

const initialState = {
  isFetching: false,
  error: false,
  id: null,
};

export default handleActions({
  [fetchMe]: (state) => ({ ...state, isFetching: true, error: false }),
  [fetchMeSuccess]: (state, action) =>
    ({ ...state, id: action.payload.result, isFetching: false, error: false }),
  [fetchMeFailed]: (state, action) => 
    ({ ...state, isFetching: false, error: { message: action.payload.message }}),
  [clearMe]: () => initialState,
  }, initialState);

const membersSelector = state => state.entities.members;
const usersSelector = state => state.entities.users;
const profilesSelector = state => state.entities.profiles;
const stateSelector = state => state.me.me;

export const meSelector = createSelector(
  membersSelector,
  usersSelector,
  profilesSelector,
  stateSelector,
  (members = [], users = [], profiles = [], state) => {
    const member = members[state.id];

    if (member === undefined) return state;

    const user = users[member.user];

    if (user === undefined) return state;

    const profile = profiles[member.primaryProfile];

    return { ...state, ...user, ...profile, profiles: member.profiles.map(p => profiles[p]) };
  }
);