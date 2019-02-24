import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';
import { SIGN_IN, signInSuccess, signInFailed } from '../actions/signin';

const store = (data, key, set = true) => {
  if (set) {
    localStorage.setItem(key, data[key]);
  } else {
    localStorage.removeItem(key);
  }
  return data;
};

const onSignOn = createLogic({
  type: SIGN_IN,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().post('sessions', 
      ({ email: action.payload.email, password: action.payload.password, strategy: action.payload.strategy || 'password' }))

    .then(data => ({ ...data, email: action.payload.email })) // Augment response with email
    .then(data => store(data, 'email', action.payload.remember))
    .then(data => store(data, 'token'))

    .then(data => dispatch(signInSuccess(data)))
    .then(() => navigate('/'))
    .then(done)

    .catch(err => {
      dispatch(signInFailed(err));
      if (action.payload.strategy === 'code') navigate('/');
    });
  }
});

export default onSignOn;