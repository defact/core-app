import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

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

const Role = memo(({ id, name, claims, permissions, entities, classes }) => (
  <Grid item xs={12}>
    <Paper>
    <div className={classes.topBar}>
      <div className={classes.block}>
        <Typography variant='h6' gutterBottom>
          {name}
        </Typography>
      </div>
      <div>
        <Button variant='outlined' className={classes.outlinedButton}>
          Get help
        </Button>
      </div>
    </div>
    </Paper>
  </Grid>
));

export default withStyles(styles)(Role);

