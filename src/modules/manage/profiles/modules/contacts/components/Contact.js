import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Form, Field } from 'react-final-form';
import withStyles from '@material-ui/core/styles/withStyles';

import { Select, Message, Submit } from '../../../../../app/components/form';
import { useSubmitWithRedirect } from '../../../../../app/hooks';

import Forms from './contacts/Form';

import validate from '../state/validate/contact';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
});

const Contact = withStyles(styles)(memo(({ profile, contact, started, error, save, info, classifiers, classes }) => {
  const onSubmit = data => save({ ...data, profile });
  const redirectTo = `/manage/members/${profile.id}/contacts`;
  const onSuccess = () => info(`The ${contact.classifier} has been updated`);
  const handleSubmit = useSubmitWithRedirect(onSubmit, { redirectTo, onSuccess });

  if (contact === undefined) return null;

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
                <Select name='classifier' label='Contact Type' data={classifiers} disabled={true} />
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
                  Save Contact
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

export default Contact;