import React from 'react';
import { Router } from '@reach/router';

import { Me, Password } from './containers';

const Routes = () => (
  <Router>
    <Me default />
    <Password path='password' />
  </Router>
);

export default Routes;