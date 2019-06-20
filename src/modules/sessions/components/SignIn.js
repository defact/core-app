import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link as To } from '@reach/router';
import Link from '@material-ui/core/Link';
import { Fingerprint } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { Form } from 'react-final-form';

import { Input, Password, Checkbox, Header, Message, Submit } from '../../app/components/form';
import { Form as Layout } from '../../app/layouts';

import validate from '../state/validate/credentials';

const styles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
  link: {
    marginTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit, 
    lineHeight: 1.5,
    textAlign: 'center',
    verticalAlign: 'top'
  },
});

const Reset = memo(({ classes }) => {
  return (
    <Link className={classes.link} component={To} to='reset' variant='body1' color='secondary'>
      Forgotten password?
    </Link>
  );
});

const SignIn = memo(({ classes, signIn, error, email, remember, started }) => (
  <Layout>
    <Helmet title={'Sign In'} />
    <Header Icon={Fingerprint} isSubmitting={started}>Sign In</Header>
    
    <Form onSubmit={signIn} validate={validate} initialValues={{email, remember}}
      render={({ handleSubmit, pristine }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input name='email' label='Email Address' autoFocus={!remember}/>
          <Password autoFocus={remember} />
          <Checkbox name='remember' label='Remember me?' />

          <Submit disabled={pristine || started} fullWidth={true}>Sign In</Submit>
        </form>
      )}
    />

    {error && <Message {...error} />}
    <Reset classes={classes} />
  </Layout>
));

export default withStyles(styles)(SignIn);
