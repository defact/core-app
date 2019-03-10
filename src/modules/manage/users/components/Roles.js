import React, { memo, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Switch';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  }
});

const Roles = memo(({ user, fetch, save, classes }) => {
  useEffect(() => {
    fetch();
  }, []);

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>

        <List className={classes.root}>
          {user.roles.map(role => (
            <ListItem key={role.id} role={role.name} button 
              onClick={() => save({ user, role })}>
              <Checkbox checked={role.has} disableRipple />
              <ListItemText primary={role.name} />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Roles);

