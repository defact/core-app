import React, { useState } from 'react';
import { Provider } from 'react-redux';

import Theme from './Theme';
import Routes from './Routes';
import createStore from './store';

import { Main } from './modules/app/layouts';
import { fetch } from './modules/me/state/actions/me';

const store = createStore();

store.dispatch(fetch.start());

const App = () => {
  const [ errorKey, setErrorKey ] = useState(0);

  return (
    <Provider store={store}>
      <Theme>
        <Main reset={() => setErrorKey(key => key + 1)}>
          <Routes path='/' errorKey={errorKey} />
        </Main>
      </Theme>
    </Provider>
  );
};

export default App;
