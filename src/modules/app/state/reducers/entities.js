import merge from 'lodash.merge';

const pick = (o, ...props) => Object.assign({}, ...props.map(p => ({[p]: o[p]})));

const entities = retain => {
  return (state = {}, action) => {
    if (action.type === 'sessions/signout/SUCCESS') {
      return retain === undefined ? {} : pick(state, retain);
    }

    if (action && action.payload && action.payload.entities) {
      return merge({}, state, action.payload.entities);
    }

    return state;
  }
};

export default entities;