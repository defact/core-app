import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: '100%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const Role = ({ id, name, claims, permissions, entities, classes }) => (
  <Paper className={classes.paper}>
    <Grid container spacing={24}>
      <Grid container item xs={12} alignItems='right'>
        <Grid item>
          <Button>Cancel</Button>
        </Grid>
        <Grid item>
          <Button>
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(Role);
