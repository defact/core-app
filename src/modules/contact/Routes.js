import React from 'react';
import { Router } from '@reach/router';

import { Contact } from './containers';

const Routes = () => (
  <Router>
    <Contact default />
  </Router>
);

export default Routes;