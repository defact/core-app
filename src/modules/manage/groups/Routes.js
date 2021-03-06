import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Groups, List, Add, Group } from './containers';
import Children from './modules/children/Routes';

const Routes = () => (
  <Router primary={false}>
    <Groups path='/'>
      <List path='/' />
      <Add path='add' />
      <Group path=':gid'>
        <Children path='groups/*' />
      </Group>
      <Redirect from=':gid' to='/manage/groups/:gid/groups' noThrow />
    </Groups>
  </Router>
);

export default Routes;
