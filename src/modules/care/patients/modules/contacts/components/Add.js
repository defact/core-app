import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Select, Submit, Message } from '../../../../../app/components/form';
import { useSubmitWithRedirect } from '../../../../../app/hooks';

import Forms from './contacts/Form';

import validate from '../state/validate/contact';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Add = withStyles(styles)(memo(({ profile, error, started, add, info, classifiers, classes }) => {
  const onSubmit = data => add({ id: profile.id, ...data });
  const onSuccess = () => info(`The contact has been added`);
  const redirectTo = `/manage/members/${profile.id}/contacts`;
  const handleSubmit = useSubmitWithRedirect(onSubmit, { redirectTo, onSuccess });

  return (
    <Paper className={classes.paper}>
      <Form 
        onSubmit={handleSubmit}
        initialValues={{ classifier: 'email' }}
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
                <Submit disabled={pristine || started}>
                  Add Contact
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