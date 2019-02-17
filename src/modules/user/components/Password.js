import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Security } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { Form } from 'react-final-form';

import { Password, Header, Message, Submit } from '../../app/components/form';
import { Form as Layout } from '../../app/layouts';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
});

const validate = values => ({
  password: values.password ? undefined : 'Required',
});

const Change = memo(({ classes, me, handleChangePassword, error, isChanging }) => (
  <Layout>
    <Header Icon={Security}>Change Password</Header>
    
    {me.forceChangePassword && <Message message='Please change your password' type='warning' />}

    <Form onSubmit={handleChangePassword} validate={validate}
      render={({ handleSubmit, pristine }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Password autoFocus />

          <Submit disabled={pristine || isChanging}>Change Password</Submit>
        </form>
      )}
    />

    {error && <Message {...error} />}
  </Layout>
));

export default withStyles(styles)(Change);
