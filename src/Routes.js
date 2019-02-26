import React, { Suspense, lazy } from 'react';
import { Router, LocationProvider, Location } from '@reach/router';

import { Home, Broken, NotFound } from './modules/app/containers';
import { Loader } from './modules/app/components';
import { Redirect } from './modules/me/containers';

const Sessions = lazy(() => import('./modules/sessions/Routes'));
const Me = lazy(() => import('./modules/me/Routes'));
const Register = lazy(() => import('./modules/register/Routes'));
const Manage = lazy(() => import('./modules/manage/Routes'));
const Contact = lazy(() => import('./modules/contact/Routes'));

const Routes = () => (
  <Broken>
    <Suspense fallback={<Loader />}>
      <LocationProvider>
        <Location>
          {({ location }) => (
            <Router location={location}>
              <Home path='/' />
              <Sessions path='signin/*' />
              <Register path='register' />
              <Me path='me/*' />
              <Manage path='manage/*' />
              <Contact path='contact' />

              <NotFound default />
            </Router>
          )}
        </Location>
        <Location children={context => <Redirect pathname={context.location.pathname} />}/>
      </LocationProvider>
    </Suspense>
  </Broken>
);

export default Routes;
