import React from 'react';
import { Router, Redirect } from '@reach/router';

import { Profiles, List, Add, Profile } from './containers';

import Contacts from './modules/contacts/Routes';
import Photos from './modules/photos/Routes';
import Notes from './modules/notes/Routes';

const Routes = () => (
  <Router primary={false}>
    <Profiles path='/'>
      <List path='/' />
      <Add path='register' />
      <Profile path=':pid'>
        <Notes path='notes/*' />
        <Photos path='photos/*' />
        <Contacts path='contacts/*' />
      </Profile>
      <Redirect from=':pid' to='/care/patients/:pid/notes' noThrow />
    </Profiles>
  </Router>
);

export default Routes;
