import { createLogic } from 'redux-logic';
import { navigate } from '@reach/router';

const onResponse = createLogic({
  type: '*',

  transform({ action }, allow) {
    if (action.payload && 
        action.payload.statusCode && 
        action.payload.statusCode === 401 &&
        action.type !== 'me/fetch/FAILED') {
      navigate('/denied');
    }

    allow(action);
  }
});

export default onResponse;