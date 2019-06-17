import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input, Submit } from '../../../app/components/form';
import { Breadcrumbs } from '../../../app/components';
import { useSubmitWithDialog } from '../../../app/hooks';

import validate from '../state/validate/profile';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ error, started, add, classes }) => {
  const { handleSubmit, Dialog } = useSubmitWithDialog(add);

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
        <Dialog error={error} message='The member has been registered' />
      </Paper>
    </>
  );
}));

export default Add;