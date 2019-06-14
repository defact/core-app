import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Form } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Input } from '../../../app/components/form';
import { Breadcrumbs } from '../../../app/components';
import { useSubmit } from '../../../app/hooks';

import validate from '../state/validate/group';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ error, started, add, classes }) => {
  const { handleSubmit, Dialog } = useSubmit(add);

  return (
    <>
      <Breadcrumbs parts={[
        { label: 'Groups', to: '..' },
        { label: 'Add Group' },
      ]} />

      <Paper className={classes.paper}>
        <Form 
          onSubmit={handleSubmit}
          validate={validate}
          render={({ handleSubmit, pristine }) => (
            <form onSubmit={handleSubmit} autoComplete='off'>
              
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <Input name='name' label='Group Name' autoFocus />
                </Grid>

                <Grid container item xs={12} justify='flex-end'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    disabled={pristine || started}
                    >
                    Add Group
                  </Button>                
                </Grid>
              </Grid>
            </form>
          )}
        />    
        <Dialog error={error} message='The group has been added' />
      </Paper>
    </>
  );
}));

export default Add;