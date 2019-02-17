import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Face } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import { Form } from 'react-final-form';

import { Input, Password, Header, Message, Submit } from '../../app/components/form';
import { Form as Layout } from '../../app/layouts';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
});

const validate = values => ({
  email: values.email ? undefined : 'Required',
  name: values.name ? undefined : 'Required',
  password: values.password ? undefined : 'Required',
});

const Register = memo(({ classes, handleRegister, error, isRegistering }) => (
  <Layout>
    <Header Icon={Face}>Register</Header>
    
    <Form onSubmit={handleRegister} validate={validate}
      render={({ handleSubmit, pristine }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input name='name' label='Name' autoFocus/>
          <Input name='email' label='Email Address' />
          <Password />

          <Submit disabled={pristine || isRegistering}>Register</Submit>
        </form>
      )}
    />

    {error && <Message {...error} />}
  </Layout>
));

export default withStyles(styles)(Register);
