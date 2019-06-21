import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
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
  link: {
    textDecoration: 'none',
  },
  right: {
    textAlign: 'right',
  }
});

const Error = memo(({ classes, title, name = 'home', children }) => (
  <Layout>
    <div className={classes.topBar}>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <Typography variant='h6' gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.right}>
          <Link to={`/help/${name}`} className={classes.link}>
            <Button variant='contained' color='primary'>
              Get help
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  </Layout>
));

export default withStyles(styles)(Error);
