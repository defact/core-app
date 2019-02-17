import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createLogicMiddleware } from 'redux-logic';
import logics from './logics';
import api from '../api';

const logger = createLogger();
const logic = createLogicMiddleware(logics, { api });

export default applyMiddleware(logic, logger);

