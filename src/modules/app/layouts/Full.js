import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingBottom: 200,
  },
  grid: {
    width: 1200,
    margin: `0 ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
});

const Full = memo(({ classes, children }) => (
  <div className={classes.root}>
    <Grid container justify='center'> 
      <Grid spacing={24} alignItems='center' justify='center' container className={classes.grid}>
        {children}
      </Grid>
    </Grid>
  </div>
));

export default withStyles(styles)(Full);
