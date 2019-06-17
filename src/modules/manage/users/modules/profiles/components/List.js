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

const NoEntry = memo(({ text }) => (
  <ListItem>
    <ListItemText primary={text} />
  </ListItem>
));

const Entry = memo(({ to, primary }) => (
  <ListItem button component={Link} to={to}>
    <ListItemText primary={primary} />
  </ListItem>
));

const Profiles = memo(({ profiles, data, classes }) => {
  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>

        <List className={classes.root}>
          {data.length === 0 && <NoEntry text={profiles.started ? 'Loading...' : 'No profiles'} />}
          {data.map(profile => 
            <Entry key={profile.id} to={`../../../members/${profile.id}/users`} primary={profile.name} />)}
        </List>
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Profiles);
