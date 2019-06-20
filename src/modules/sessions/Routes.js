import React from 'react';
import { Router } from '@reach/router';

import { SignIn, Verify, Reset } from './containers';

const Routes = () => (
  <Router primary={false}>
    <SignIn default />
    <Reset path='reset' />
    <Verify path=':code' />
  </Router>
);

export default Routes;