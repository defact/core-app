import React from 'react';

import Icon from '@material-ui/icons/MailOutline';

import TableCell from '@material-ui/core/TableCell';

export default ({ contact }) => (
  <>
    <TableCell width={'10%'}><Icon /></TableCell>
    <TableCell>{contact.value.email}</TableCell>
  </>
);