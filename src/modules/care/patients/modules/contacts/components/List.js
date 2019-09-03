import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import withStyles from '@material-ui/core/styles/withStyles';

import Address from '@material-ui/icons/Room';
import Url from '@material-ui/icons/Laptop';
import Email from '@material-ui/icons/MailOutline';
import Phone from '@material-ui/icons/PhoneIphone';

import { Table } from '../../../../../app/components';

import Actions from './Actions';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    backgroundColor: '#fff',
  },
});

const NoEntry = memo(({ text, classes }) => (
  <List>
    <ListItem>
      <ListItemText primary={text} />
    </ListItem>
  </List>
));

const Contacts = memo(({ profile, contacts, data, fetch, remove, classes }) => {
  const icon = ({ classifier }) => (
    { email: <Email />,
      phone: <Phone />,
      address: <Address />,
      url: <Url />,
    }[classifier]);

  const value = ({ classifier, value }) => (
    { email: value.email,
      phone: value.phone,
      address: `${value.street} ${value.city} ${value.postcode}`,
      url: value.url,
    }[classifier]);

  const actions = contact => <Actions contact={contact} profile={profile} remove={remove} />;

  const columns = [
    { name: 'classifier', cell: icon, width: 60, cellProps: { style: { paddingRight: 0 }}},
    { name: 'value', cell: value, cellProps: { style: { fontSize: '1rem', paddingRight: 0 }}},
    { name: 'actions', cell: actions, width: 100, cellProps: { align: 'right' }},
  ];

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>

        {data.length === 0 && <NoEntry text={contacts.started ? 'Loading...' : 'No contacts'} />}

        {data.length > 0 && <Table data={data} columns={columns} />}
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Contacts);
