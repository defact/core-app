import merge from 'lodash.mergewith';
import isArray from 'lodash.isarray';

const pick = (o, ...props) => Object.assign({}, ...props.map(p => ({[p]: o[p]})));

const strategy = (o, src) => {
  if (isArray(o)) return src; // overwrite arrays
}

const entities = retain => {
  return (state = {}, action) => {
    if (action.type === 'sessions/signout/SUCCESS') {
      return retain === undefined ? {} : pick(state, retain);
    }

    if (action && action.payload && action.payload.entities) {
      return merge({}, state, action.payload.entities, strategy);
    }

    return state;
  }
};

export default entities;