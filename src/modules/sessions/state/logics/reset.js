import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';
import { reset } from '../actions/reset';
import { warning } from '../../../app/state/actions/flash';

const onReset = createLogic({
  type: reset.start,
  latest: true,

  process({ api, action }, dispatch, done) {
    return api().post(`users/${action.payload.email}/code`)

    .then(() => dispatch(reset.success()))
    .then(() => navigate('/signin'))
    .then(() => dispatch(warning('Your password has been reset - check your email')))
    .then(done)

    .catch(err => {
      dispatch(reset.failed(err));
    });
  }
});

export default onReset;