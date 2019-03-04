import React from 'react';
import { Router } from '@reach/router';

import { Me, Password } from './containers';
import { authenticate } from './state/hoc';

const Routes = () => (
  <Router primary={false}>
    <Me path='/' />
    <Password path='password' />
  </Router>
);

export default authenticate(Routes);