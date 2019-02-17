import React from 'react';
import { Router } from '@reach/router';

import { Register } from './containers';

const Routes = () => (
  <Router>
    <Register default />
  </Router>
);

export default Routes;