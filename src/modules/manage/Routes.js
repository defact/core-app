import React from 'react';
import { Router } from '@reach/router';

import { authenticate } from '../me/state/hoc';

import Manage from './Manage';
import Users from './users/Routes';
import Roles from './roles/Routes';
// import Groups from './groups/Routes';
// import Members from './groups/Members';

const Routes = () => (
  <Router primary={false}>
    <Manage path='/'>
      <Users path='users/*' />
      <Roles path='roles/*' />
      {/* <Groups path='groups/*' />
      <Members path='members/*' /> */}
    </Manage>
  </Router>
);

export default authenticate(Routes);
