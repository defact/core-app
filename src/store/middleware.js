import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createLogicMiddleware } from 'redux-logic';
import { normalize } from 'normalizr';

import logics from './logics';
import schemas from './schemas';
import api from '../api';

import queued from '../modules/app/state/middleware/queued';

const logic = createLogicMiddleware(logics, { api, normalize, schemas });
const middlewares = [ logic, queued ];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: (getState, action) => !action.error
  });
  middlewares.push(logger);
}

export default applyMiddleware(...middlewares);

