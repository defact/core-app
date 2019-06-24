import React, { memo } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    width: 'auto',
    margin: theme.spacing.unit * 5,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
    },
    padding: theme.spacing.unit
  },
});

const Full = memo(({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
));

export default withStyles(styles)(Full);
