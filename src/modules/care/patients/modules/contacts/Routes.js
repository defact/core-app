import React from 'react';
import { Router } from '@reach/router';

import { Contacts, List, Add, Contact } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Contacts path='/'>
      <List path='/' />
      <Add path='add' />
      <Contact path=':cid' />
    </Contacts>
  </Router>
);

export default Routes;
