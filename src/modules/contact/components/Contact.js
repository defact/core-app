import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Helmet } from 'react-helmet';
import { MailOutline } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

import { Header, Submit, Input } from '../../app/components/form';
import { useSubmitWithDialog } from '../../app/hooks';
import { Form as Layout } from '../../app/layouts';

import validate from '../state/validate/message';

const styles = theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
});

const Contact = memo(({ classes, me, send, started, error }) => {
  const { handleSubmit, Dialog } = useSubmitWithDialog(send);
  const { email: from } = me;
  
  return (
    <Layout>
      <Helmet title={'Contact Us'} />
      <Header Icon={MailOutline} isSubmitting={started}>Contact Us</Header>
      
      <Form onSubmit={handleSubmit} validate={validate} initialValues={{ from }}
        render={({ handleSubmit, pristine }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Input name='from' label='Email address' autoFocus={from === undefined} />
            <Input name='message' label='Write your message' multiline autoFocus={from !== undefined} />

            <Submit disabled={pristine || started} fullWidth={true}>Send</Submit>
          </form>
        )}
      />

      <Dialog error={error} message='Your message has been sent' />
    </Layout>
  );
});

export default withStyles(styles)(Contact);
