import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Password, Submit, Message } from '../../../app/components/form';

import validate from '../state/validate/password';

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 3,
  },
  card: {
    padding: theme.spacing.unit * 3,
  },
  form: {
    width: '100%',
  },
});

const Change = memo(({ user, save, started, error, classes }) => {
  const handleSave = (data) => !user.disabled && save(data);

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>
        <Form onSubmit={handleSave} validate={validate}
          render={({ handleSubmit, pristine }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={9}>
                  <Password autoFocus />

                  <Submit disabled={pristine || started}>Change Password</Submit>
                </Grid>
              </Grid>
            </form>
          )}
        />

        {error && <Message {...error} />}
      </div>
    </Paper>
  );
});

export default withStyles(styles)(Change);