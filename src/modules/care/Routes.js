import React from 'react';
import { Router } from '@reach/router';

import { authenticate } from '../me/state/hoc';

import Care from './Care';
import Patients from './patients/Routes';
import Rooms from './rooms/Routes';
import Notes from './notes/Routes';

const Routes = () => (
  <Router primary={false}>
    <Care path='/'>
      <Patients path='patients/*' />
      <Rooms path='rooms/*' />
      <Notes path='notes/*' />
    </Care>
  </Router>
);

export default authenticate(Routes);
