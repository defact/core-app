import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createLogicMiddleware } from 'redux-logic';
import { normalize } from 'normalizr';

import logics from './logics';
import schemas from './schemas';
import api from '../api';

const logger = createLogger();
const logic = createLogicMiddleware(logics, { api, normalize, schemas });

export default applyMiddleware(logic) //, logger);

