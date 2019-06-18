import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Message, Submit } from '../../../app/components/form';
import { Breadcrumbs } from '../../../app/components';
import { useSubmitWithRedirect } from '../../../app/hooks';

import validate from '../state/validate/user';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ error, started, add, info, classes }) => {
  const onSuccess = () => info('The user has been registered');
  const handleSubmit = useSubmitWithRedirect(add, { redirectTo: '/manage/users', onSuccess });

  return (
    <>
      <Breadcrumbs parts={[
        { label: 'Users', to: '..' },
        { label: 'Register' },
      ]} />

      <Paper className={classes.paper}>
        <Form 
          onSubmit={handleSubmit}
          validate={validate}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} autoComplete='off'>
              
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Input name='email' label='Email Address' autoFocus />
                </Grid>

                <Grid container item xs={12} justify='flex-end'>
                  <Submit disabled={pristine || started}>
                    Register User
                  </Submit>                
               </Grid>
              </Grid>
            </form>
          )}
        />    
        {error && <Message {...error} />}
      </Paper>
    </>
  );
}));

export default Add;