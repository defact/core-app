import React from 'react';
import { Router } from '@reach/router';

import { Photos, List, Add, Photo } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Photos path='/'>
      <List path='/' />
      <Add path='add' />
      <Photo path=':phid' />
    </Photos>
  </Router>
);

export default Routes;
