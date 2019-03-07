import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';
import { signIn } from '../actions/signin';

const store = (data, key, set = true) => {
  if (set) {
    localStorage.setItem(key, data[key]);
  } else {
    localStorage.removeItem(key);
  }
  return data;
};

const onSignOn = createLogic({
  type: signIn.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().post('sessions', 
      ({ email: action.payload.email, password: action.payload.password, strategy: action.payload.strategy || 'password' }))

    .then(data => ({ ...data, email: action.payload.email })) // Augment response with email
    .then(data => store(data, 'email', action.payload.remember))
    .then(data => store(data, 'token'))

    .then(data => dispatch(signIn.success(data)))
    .then(() => navigate('/'))
    .then(done)

    .catch(err => {
      dispatch(signIn.failed(err));
      if (action.payload.strategy === 'code') navigate('/');
    });
  }
});

export default onSignOn;