import { createSelector } from 'reselect';

const stateSelector = state => state.me.me;
const dataSelector = state => state.me.me.data;

const usersSelector = state => state.manage.users.users.data;
const profilesSelector = state => state.manage.profiles.profiles.data;

export const meSelector = createSelector(
  dataSelector,
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