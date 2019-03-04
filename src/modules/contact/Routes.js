import React from 'react';
import { Router } from '@reach/router';

import { Contact } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Contact default />
  </Router>
);

export default Routes;