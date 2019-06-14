import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';

import { clear } from '../../../me/state/actions/me';

const REDIRECTS = {
  'Token expired': '/signin',
  'Unauthorized': '/denied',
};

const onResponse = createLogic({
  type: '*',

  transform({ action, dispatch }, allow) {
    if (action.payload && 
        action.payload.statusCode && 
        action.payload.statusCode === 401 &&
        action.type !== 'me/fetch/FAILED') {
      dispatch(clear());
      navigate(REDIRECTS[action.payload.message]);
    }

    allow(action);
  }
});

export default onResponse;