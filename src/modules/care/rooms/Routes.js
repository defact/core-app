import React from 'react';
import { Router } from '@reach/router';

import { Rooms, List } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Rooms path='/'>
      <List path='/' />
    </Rooms>
  </Router>
);

export default Routes;