import React, { memo, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  }
});

const NoEntry = memo(({ primary }) => (
  <ListItem>
    <ListItemText primary={primary} />
  </ListItem>
));

const Entry = memo(({ to, primary }) => (
  <ListItem button component={Link} to={to}>
    <ListItemText primary={primary} />
  </ListItem>
));

const Profiles = memo(({ profile, users, fetch, classes }) => {
  const { id } = profile;
  
  useEffect(() => {
    fetch({ id });
  }, [id]);

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>

        <List className={classes.root}>
          {users.length === 0 && <NoEntry primary='No users' />}
          {users.map(user => 
            <Entry key={user.id} to={`../../../users/${user.id}/profiles`} primary={user.email} />)}
        </List>
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Profiles);
