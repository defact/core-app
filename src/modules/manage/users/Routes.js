import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Users, List, Add, User } from './containers';
import Profiles from './modules/profiles/Routes';
import Roles from './modules/roles/Routes';

const Routes = () => (
  <Router primary={false}>
    <Users path='/'>
      <List path='/' />
      <Add path='register' />
      <User path=':uid'>
        <Roles path='roles/*' />
        <Profiles path='members/*' />
      </User>
      <Redirect from=':uid' to='/manage/users/:uid/roles' noThrow />
    </Users>
  </Router>
);

export default Routes;
