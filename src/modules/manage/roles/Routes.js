import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Roles, List, Add, Role } from './containers';

import Claims from './modules/claims/Routes';

const Routes = () => (
  <Router primary={false}>
    <Roles path='/'>
      <List path='/' />
      <Add path='add' />
      <Role path=':rid'>
        <Claims path='claims/*' />
      </Role>
      <Redirect from=':rid' to='/manage/roles/:rid/claims' noThrow />
    </Roles>
  </Router>
);

export default Routes;
