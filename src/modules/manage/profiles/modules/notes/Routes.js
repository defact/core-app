import React from 'react';
import { Router } from '@reach/router';

import { Notes, List, Add } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Notes path='/'>
      <List path='/' />
      <Add path='add' />
    </Notes>
  </Router>
);

export default Routes;
