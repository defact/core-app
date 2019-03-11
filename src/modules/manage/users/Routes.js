import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Users, List, Add, User, Roles, Profiles } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Users path='/'>
      <List path='/' />
      <Add path='register' />
      <User path=':uid'>
        <Roles path='roles' />
        <Profiles path='members' />
      </User>
      <Redirect from=':uid' to='/manage/users/:uid/roles' noThrow />
    </Users>
  </Router>
);

export default Routes;
