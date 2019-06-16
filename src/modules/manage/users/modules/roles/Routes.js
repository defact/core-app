import React from 'react';
import { Router } from '@reach/router';

import { Roles, List } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Roles path='/'>
      <List path='/' />
    </Roles>
  </Router>
);

export default Routes;
