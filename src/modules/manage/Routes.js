import React from 'react';
import { Router } from '@reach/router';

import Users from './users/Routes';
import Roles from './roles/Routes';
import Groups from './groups/Routes';
import Members from './groups/Members';

const Routes = () => (
  <Router>
    <Users default path='users' />
    <Roles path='roles' />
    <Groups path='groups' />
    <Members path='members' />
  </Router>
);

export default Routes;
