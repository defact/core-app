import React from 'react';
import { Router } from '@reach/router';

import { Claims } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Claims path='/' />
  </Router>
);

export default Routes;
