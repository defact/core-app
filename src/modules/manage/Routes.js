import React from 'react';
import { Router } from '@reach/router';

import Manage from './Manage';
// import Users from './users/Routes';
import Roles from './roles/Routes';
// import Groups from './groups/Routes';
// import Members from './groups/Members';

const Routes = () => (
  <Router>
    <Manage default>
      {/* <Users default path='users/*' /> */}
      <Roles path='roles/*' />
      {/* <Groups path='groups/*' />
      <Members path='members/*' /> */}
    </Manage>
  </Router>
);

export default Routes;
