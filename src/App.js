import React from 'react';
import { Provider } from 'react-redux';

import Theme from './Theme';
import Routes from './Routes';
import createStore from './store';

import { Main } from './modules/app/layouts';
import { fetchMe } from './modules/user/actions/me';

const store = createStore();

store.dispatch(fetchMe());

const App = () => (
  <Provider store={store}>
    <Theme>
      <Main>
        <Routes path='/' />
      </Main>
    </Theme>
  </Provider>
);

export default App;
