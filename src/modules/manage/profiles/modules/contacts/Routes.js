import React from 'react';
import { Router } from '@reach/router';

import { Contacts, List, Add } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Contacts path='/'>
      <List path='/' />
      <Add path='add' />
    </Contacts>
  </Router>
);

export default Routes;
