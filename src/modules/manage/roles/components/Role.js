import React from 'react';
import Paper from '@material-ui/core/Paper';

const Role = ({ role }) => (
  <Paper key={role}>{role}</Paper>
);

export default Role;
