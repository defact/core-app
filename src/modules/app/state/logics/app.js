import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';

import { clear } from '../../../me/state/actions/me';

const REDIRECTS = {
  'Token expired': '/signin',
  'Unauthorized': '/denied',
};

const onResponse = createLogic({
  type: '*',

  process({ action }, dispatch, done) {
    if (action.payload && 
        action.payload.statusCode && 
        action.payload.statusCode === 401 &&
        action.type !== 'me/fetch/FAILED') {
      dispatch(clear());
      navigate(REDIRECTS[action.payload.message]);
    }

    done();
  }
});

export default onResponse;