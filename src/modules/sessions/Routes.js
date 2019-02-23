import React from 'react';
import { Router } from '@reach/router';

import { SignIn, Verify } from './containers';

const Routes = () => (
  <Router>
    <Verify path=':code' />
    <SignIn default />
  </Router>
);

export default Routes;