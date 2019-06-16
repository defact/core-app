import React from 'react';
import { Router } from '@reach/router';

import { Children } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Children path='/' />
  </Router>
);

export default Routes;
