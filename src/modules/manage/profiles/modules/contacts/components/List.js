import React, { memo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import Table from 'mui-virtualized-table';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

import withStyles from '@material-ui/core/styles/withStyles';

import Address from '@material-ui/icons/Room';
import Url from '@material-ui/icons/Laptop';
import Email from '@material-ui/icons/MailOutline';
import Phone from '@material-ui/icons/PhoneIphone';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    backgroundColor: '#fff',
  },
});

const Contacts = memo(({ profile, contacts, fetch, remove, classes }) => {
  const { id } = profile;
  
  useEffect(() => {
    fetch({ id });
  }, [id]);

  const icon = c => (
    { email: <Email />,
      phone: <Phone />,
      address: <Address />,
      url: <Url />,
    }[c.classifier]);

  const value = c => (
    { email: c.value.email,
      phone: c.value.phone,
      address: c.value.postcode,
      url: c.value.url,
    }[c.classifier]);

  const columns = [
    { name: 'classifier', cell: icon, width: '30%' },
    { name: 'value', cell: value, width: '70%' },
  ];

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>

        <AutoSizer disableHeight>
          {({ width }) => (
            <Table width={width} data={contacts} columns={columns} />
          )}
        </AutoSizer>
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Contacts);
