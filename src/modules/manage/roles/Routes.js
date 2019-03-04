import React from 'react';
import { Router } from '@reach/router';

import { Roles, List, Add } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Roles path='/'>
      <List path='/' />
      <Add path='add' />
    </Roles>
  </Router>
);

export default Routes;
