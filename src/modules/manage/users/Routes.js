import React from 'react';
import { Router } from '@reach/router';

import { Manage, Edit, Add } from './containers';

const Routes = () => (
  <Router>
    <Manage default />
    <Edit path=':id' />
    <Add path='add' />
  </Router>
);

export default Routes;