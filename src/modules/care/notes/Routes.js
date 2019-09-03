import React from 'react';
import { Router } from '@reach/router';

import { Notes, List } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Notes path='/'>
      <List path='/' />
    </Notes>
  </Router>
);

export default Routes;