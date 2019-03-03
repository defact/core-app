import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import { Full as Layout } from '../../app/layouts';

const styles = theme => ({
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Error = memo(({ classes, title, children }) => (
  <Layout>
      <div className={classes.topBar}>
        <div>
          <Typography variant='h6' gutterBottom>
            {title}
          </Typography>
          <Typography variant='body2'>
            {children}
          </Typography>
        </div>
        <div>
          <Button variant='contained' color='primary'>
            Get help
          </Button>
        </div>
      </div>
  </Layout>
));

export default withStyles(styles)(Error);
