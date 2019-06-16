import React, { memo, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Select } from '../../../../../app/components/form';
import { useSubmit } from '../../../../../app/hooks';

import Forms from './contacts/Form';

import validate from '../state/validate/contact';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Contact = withStyles(styles)(memo(({ profile, contact, error, isSaving, add, classifiers, classes }) => {
  const { handleSubmit, Dialog } = useSubmit(data => add({ id: profile.id, ...data }));

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
                <Select name='classifier' label='Contact Type' data={classifiers} />
              </Grid>

              <Grid item xs={12} sm={9}>
                <Field name='classifier' subscription={{ value: true }}>
                  {({ input: { value } }) => {
                    const Contact = Forms[value];
                    return <Contact />
                  }}
                </Field>
              </Grid>

              <Grid container item xs={12} justify='flex-end'>
                <Button
                  type='submit'
                  variant='contained'
                  color='secondary'
                  disabled={pristine || isSaving}
                  >
                  Save Contact
                </Button>                
              </Grid>
            </Grid>
          </form>
        )}
      />    
      <Dialog error={error} message='The contact has been saved' />
    </Paper>
  );
}));

export default Contact;