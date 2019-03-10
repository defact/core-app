import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';

const REDIRECTS = {
  'Token expired': '/signin',
  'Not authorized': '/denied',
};

const onResponse = createLogic({
  type: '*',

  transform({ action }, allow) {
    if (action.payload && 
        action.payload.statusCode && 
        action.payload.statusCode === 401 &&
        action.type !== 'me/fetch/FAILED') {
      navigate(REDIRECTS[action.payload.message]);
    }

    allow(action);
  }
});

export default onResponse;