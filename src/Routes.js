import React, { useEffect } from 'react';
import { Router, LocationProvider, Location } from '@reach/router';

import Sessions from './modules/sessions/Routes';
import Me from './modules/me/Routes';
import Register from './modules/register/Routes';
import Manage from './modules/manage/Routes';
// import Contact from './modules/contact/Routes';

import { Redirect } from './modules/me/containers';

const Routes = () => (
  <LocationProvider>
    <Router>
      <Sessions default />
      <Register path='register' />
      <Me path='me/*' />
      <Manage path='manage/*' />
      {/* <Contact path='contact' /> */}
    </Router>
    <Location children={context => <Redirect pathname={context.location.pathname} />}/>
  </LocationProvider>
);

export default Routes;
