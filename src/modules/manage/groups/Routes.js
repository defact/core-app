import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Groups, List, Add, Group, Children } from './containers';

const Routes = () => (
  <Router primary={false}>
    <Groups path='/'>
      <List path='/' />
      <Add path='add' />
      <Group path=':gid'>
        <Children path='groups'>
          {/* <AddChild path='add' /> */}
        </Children>
      </Group>
      <Redirect from=':gid' to='/manage/groups/:gid/groups' noThrow />
    </Groups>
  </Router>
);

export default Routes;
