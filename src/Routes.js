import React, { useEffect } from 'react';
import { Router, LocationProvider, Location } from '@reach/router';

import Sessions from './modules/sessions/Routes';
import User from './modules/user/Routes';
// import Manage from './modules/manage/Routes';
import Register from './modules/register/Routes';
// import Contact from './modules/contact/Routes';

import { Redirect } from './modules/user/containers';

const Routes = () => (
  <LocationProvider>
    <Router>
      <Sessions default />
      <Register path='register' />
      <User path='me/*' />
      {/* 
      <Manage path='manage/*' />
      <Contact path='contact' /> */}
    </Router>
    <Location children={
      context => <Redirect pathname={context.location.pathname} />
    }/>
  </LocationProvider>
);

export default Routes;
