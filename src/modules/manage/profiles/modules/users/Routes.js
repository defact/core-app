import React from 'react';
import { Router } from '@reach/router';

import { Users } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Users path='/' />
  </Router>
);

export default Routes;
