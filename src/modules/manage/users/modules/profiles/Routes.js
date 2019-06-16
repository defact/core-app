import React from 'react';
import { Router } from '@reach/router';

import { Profiles, List } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Profiles path='/'>
      <List path='/' />
    </Profiles>
  </Router>
);

export default Routes;
