import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Profiles, List, Add, Profile } from './containers';

import Users from './modules/users/Routes';
import Contacts from './modules/contacts/Routes';
import Photos from './modules/photos/Routes';
import Notes from './modules/notes/Routes';

const Routes = () => (
  <Router primary={false}>
    <Profiles path='/'>
      <List path='/' />
      <Add path='register' />
      <Profile path=':pid'>
        <Users path='users/*' />
        <Contacts path='contacts/*' />
        <Photos path='photos/*' />
        <Notes path='notes/*' />
      </Profile>
      <Redirect from=':pid' to='/manage/members/:pid/users' noThrow />
    </Profiles>
  </Router>
);

export default Routes;
