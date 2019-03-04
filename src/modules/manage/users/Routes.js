import React from 'react';
import { Router } from '@reach/router';

import { Users, List, Add, User, Roles, Profiles } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Users path='/'>
      <List path='/' />
      <Add path='register' />
      <User path=':id'>
        <Roles default path='roles' />
        <Profiles path='profiles' />
      </User>
    </Users>
  </Router>
);

export default Routes;
