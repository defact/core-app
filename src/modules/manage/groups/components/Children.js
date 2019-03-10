import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
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

const Children = memo(({ group, classes }) => {
  const { groups } = group;

  if (groups === undefined) return;

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>

        <List className={classes.root}>
          {groups.length === 0 && <NoEntry primary='No children' />}
          {groups.map(child => 
            <Entry key={child.id} to={`../../${child.id}`} primary={child.name} />)}
        </List>
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Children);

