import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Helmet } from 'react-helmet';
import { Security } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

import { Password, Header, Submit, Message } from '../../app/components/form';
import { useSubmit } from '../../app/hooks';
import { Form as Layout } from '../../app/layouts';

import validate from '../state/validate/password';

const styles = theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
});

const Change = memo(({ classes, me, change, started, error }) => {
  const { handleSubmit, Dialog } = useSubmit(change);
  
  return (
    <Layout>
      <Helmet title={'Change Password'} />
      <Header Icon={Security} isSubmitting={started}>Change Password</Header>
      
      {me.forceChangePassword && <Message message='Please change your password' type='warning' />}

      <Form onSubmit={handleSubmit} validate={validate}
        render={({ handleSubmit, pristine }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Password autoFocus />

            <Submit disabled={pristine || started}>Change Password</Submit>
          </form>
        )}
      />

      <Dialog error={error} message='Your password has been successfully changed' />
    </Layout>
  );
});

export default withStyles(styles)(Change);
