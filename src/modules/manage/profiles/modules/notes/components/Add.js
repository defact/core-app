import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Submit, Message } from '../../../../../app/components/form';
import { useSubmitWithRedirect } from '../../../../../app/hooks';

import validate from '../state/validate/note';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ profile, error, started, add, info, classes }) => {
  const onSubmit = data => add({ id: profile.id, ...data });
  const onSuccess = () => info(`The note has been recorded`);
  const redirectTo = `/manage/members/${profile.id}/notes`;
  const handleSubmit = useSubmitWithRedirect(onSubmit, { redirectTo, onSuccess });

  return (
    <Paper className={classes.paper}>
      <Form 
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit} autoComplete='off'>
            
            <Grid container spacing={24}>
              <Grid item xs={12} sm={3}>
                <Input name='text' label='Text' />
              </Grid>

              <Grid container item xs={12} justify='flex-end'>
                <Submit disabled={pristine || started}>
                  Record Note
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

export default Add;