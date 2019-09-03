import React from 'react';
import { Router } from '@reach/router';

import { Users, List } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Users path='/'>
      <List path='/' />
    </Users>
  </Router>
);

export default Routes;
