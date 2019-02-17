import { createStore, compose } from 'redux';
import middleware from './middleware';
import reducer from './reducer';

const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default initialState => {
  const store = createStore(
    reducer,
    initialState,
    enhancer
  );

  return store;
}