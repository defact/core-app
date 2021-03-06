import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Message, Submit } from '../../../app/components/form';
import { Breadcrumbs } from '../../../app/components';
import { useSubmitWithRedirect } from '../../../app/hooks';

import validate from '../state/validate/profile';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ error, started, add, info, classes }) => {
  const onSuccess = () => info('The member has been registered');
  const handleSubmit = useSubmitWithRedirect(add, { redirectTo: '/manage/members', onSuccess });

  return (
    <>
      <Breadcrumbs parts={[
        { label: 'Members', to: '..' },
        { label: 'Register' },
      ]} />

      <Paper className={classes.paper}>
        <Form 
          onSubmit={handleSubmit}
          validate={validate}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} autoComplete='off'>
              
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <Input name='name' label='Name' autoFocus />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input name='email' label='Email Address' />
                </Grid>

                <Grid container item xs={12} justify='flex-end'>
                  <Submit disabled={pristine || started}>
                    Register Member
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