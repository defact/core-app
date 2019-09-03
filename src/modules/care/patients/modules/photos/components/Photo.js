import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Message, Submit } from '../../../../../app/components/form';
import { useSubmitWithRedirect } from '../../../../../app/hooks';

import validate from '../state/validate/photo';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Photo = withStyles(styles)(memo(({ profile, photo, started, error, save, info, classifiers, classes }) => {
  const onSubmit = data => save({ ...data, profile });
  const onSuccess = () => info(`The photo has been updated`);
  const redirectTo = `/manage/members/${profile.id}/photos`;
  const handleSubmit = useSubmitWithRedirect(onSubmit, { redirectTo, onSuccess });

  if (photo === undefined) return null;

  return (
    <Paper className={classes.paper}>
      <Form 
        onSubmit={handleSubmit}
        initialValues={contact}
        validate={validate}
        render={({ handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit} autoComplete='off'>
            
            <Grid container spacing={24}>
              <Grid item xs={12} sm={3}>
                <Input name='value' label='Value' />
              </Grid>

              <Grid container item xs={12} justify='flex-end'>
                <Submit disabled={pristine || started}>
                  Save Photo
                </Submit>                
              </Grid>
            </Grid>
          </form>
        )}
      />

      {error && <Message {...error} />}
    </Paper>
  );
}));

export default Photo;