import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Profiles, List, Add, Profile, Users } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Profiles path='/'>
      <List path='/' />
      <Add path='register' />
      <Profile path=':pid'>
        <Users path='access' />
      </Profile>
      <Redirect from=':pid' to='/manage/members/:pid/access' noThrow />
    </Profiles>
  </Router>
);

export default Routes;
