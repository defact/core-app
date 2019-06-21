import React from 'react';
import { Router } from '@reach/router';

import { Help } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Help path='/:name' />
  </Router>
);

export default Routes;