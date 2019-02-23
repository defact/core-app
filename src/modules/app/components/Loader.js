import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

import { Full as Layout } from '../../app/layouts';

const styles = theme => ({
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  outlinedButton: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
});

const Loader = memo(({ classes, title, children }) => (
  <Layout>
    <Grid item xs={12}>
      <div className={classes.topBar}>
        <div className={classes.block}>
          <CircularProgress color='secondary' />          
        </div>
      </div>
    </Grid>
  </Layout>
));

export default withStyles(styles)(Loader);
