import React from 'react';
import { Router } from '@reach/router';

import { SignIn, Verify } from './containers';

const Routes = () => (
  <Router>
    <SignIn path='signin' />
    <Verify path='verify/:code' />
  </Router>
);

export default Routes;