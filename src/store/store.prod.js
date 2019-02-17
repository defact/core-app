import { createStore, compose } from 'redux';
import middleware from './middleware';
import reducer from './reducer';

export default initialState => {
  const store = createStore(
    reducer,
    initialState,
    compose(middleware)
  );

  return store;
}