import React from 'react';
import { Router } from '@reach/router';

import { List, Add } from './containers';

const Routes = () => (
  <Router>
    <List default />
    {/* <Add path='add' /> */}
  </Router>
);

export default Routes;
