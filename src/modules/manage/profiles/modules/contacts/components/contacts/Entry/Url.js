import React from 'react';

import Icon from '@material-ui/icons/Laptop';

import TableCell from '@material-ui/core/TableCell';

export default ({ contact }) => (
  <>
    <TableCell><Icon /></TableCell>
    <TableCell>{contact.value.url}</TableCell>
  </>
);