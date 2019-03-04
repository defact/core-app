import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { Full as Layout } from '../../app/layouts';

const styles = theme => ({
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

const Me = memo(({ classes, me }) => (
  <Layout>
    <Helmet title={'Profile'} />

    <Grid item xs={12}>
      <div className={classes.topBar}>
        <div>
          <Typography variant='h6' gutterBottom>
            {me.name}
          </Typography>
          <Typography variant='body2'>
            {me.email}
          </Typography>
        </div>
        <div>
          <Button variant='outlined'>
            Get help
          </Button>
        </div>
      </div>
    </Grid>
  </Layout>
));

export default withStyles(styles)(Me);
