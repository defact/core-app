import React, { memo } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    // paddingBottom: 200,
    width: 'auto',
    margin: theme.spacing.unit * 5,
    padding: theme.spacing.unit
  },
});

const Full = memo(({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
));

export default withStyles(styles)(Full);
