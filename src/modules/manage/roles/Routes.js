import React from 'react';
import { Router } from '@reach/router';

import { Roles, List, Add } from './containers';

const Routes = () => (
  <Router>
    <Roles default>
      <List default />
      <Add path='add' />
    </Roles>
  </Router>
);

export default Routes;
