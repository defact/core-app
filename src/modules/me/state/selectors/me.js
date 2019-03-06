import { createSelector } from 'reselect';

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