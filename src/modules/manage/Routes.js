import React from 'react';
import { Router } from '@reach/router';

import { authenticate } from '../me/state/hoc';

import Manage from './Manage';
import Users from './users/Routes';
import Roles from './roles/Routes';
import Groups from './groups/Routes';
import Profiles from './profiles/Routes';

const Routes = () => (
  <Router primary={false}>
    <Manage path='/'>
      <Users path='users/*' />
      <Roles path='roles/*' />
      <Groups path='groups/*' />
      <Profiles path='members/*' />
    </Manage>
  </Router>
);

export default authenticate(Routes);
