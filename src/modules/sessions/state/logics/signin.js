import qs from 'query-string';
import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';
import { signIn } from '../actions/signin';

const store = (data, key, set = true) => {
  if (set) {
    if (data[key] !== undefined) {
      localStorage.setItem(key, data[key]);
    }
  } else {
    localStorage.removeItem(key);
  }
  return data;
};

const onSignOn = createLogic({
  type: signIn.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    const returnTo = qs.parse(location.search).return || '/';

    return api().post('sessions', 
      ({ ...action.payload, strategy: action.payload.strategy || 'password' }))

    .then(data => ({ ...data, email: action.payload.email })) // Augment response with email
    .then(data => store(data, 'email', action.payload.remember))
    .then(data => store(data, 'token'))

    .then(data => dispatch(signIn.success(data)))
    .then(() => navigate(returnTo))
    .then(done)

    .catch(err => {
      dispatch(signIn.failed(err));
      if (action.payload.strategy === 'code') navigate('/');
    });
  }
});

export default onSignOn;