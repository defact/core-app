import React from 'react';
import { Router } from '@reach/router';

import { Help } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Help default />
  </Router>
);

export default Routes;