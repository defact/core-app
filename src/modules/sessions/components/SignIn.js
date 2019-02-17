import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Fingerprint } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { Form } from 'react-final-form';

import { Input, Password, Checkbox, Header, Message, Submit } from '../../app/components/form';
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
  password: values.password ? undefined : 'Required',
});

const SignIn = memo(({ classes, handleSignIn, error, email, remember, isSigningIn }) => (
  <Layout>
    <Header Icon={Fingerprint}>Sign In</Header>
    
    <Form onSubmit={handleSignIn} validate={validate} initialValues={{email, remember}}
      render={({ handleSubmit, pristine, values }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input name='email' label='Email Address' autoFocus={!remember}/>
          <Password autoFocus={remember} />
          <Checkbox name='remember' label='Remember me?' />

          <Submit disabled={pristine || isSigningIn}>Sign In</Submit>
        </form>
      )}
    />

    {error && <Message {...error} />}
  </Layout>
));

export default withStyles(styles)(SignIn);
