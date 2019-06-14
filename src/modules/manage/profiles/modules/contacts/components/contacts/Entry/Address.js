import React from 'react';

import Icon from '@material-ui/icons/Room';

import TableCell from '@material-ui/core/TableCell';

export default ({ contact }) => (
  <>
    <TableCell><Icon /></TableCell>
    <TableCell>{contact.value.postcode}</TableCell>
  </>
);