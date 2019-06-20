import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link as To } from '@reach/router';
import Link from '@material-ui/core/Link';
import { Fingerprint } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { Form } from 'react-final-form';

import { Input, Header, Message, Submit } from '../../app/components/form';
import { Form as Layout } from '../../app/layouts';

import validate from '../state/validate/email';

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

const SignIn = memo(({ classes }) => {
  return (
    <Link className={classes.link} component={To} to='..' variant='body1' color='secondary'>
      Return to sign in?
    </Link>
  );
});

const Reset = memo(({ classes, reset, error, email, started }) => (
  <Layout>
    <Helmet title={'Reset Password'} />
    <Header Icon={Fingerprint} isSubmitting={started}>Reset Password</Header>
    
    <Form onSubmit={reset} validate={validate} initialValues={{email}}
      render={({ handleSubmit }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input name='email' label='Email Address' autoFocus={true}/>

          <Submit disabled={started} fullWidth={true}>Reset Password</Submit>
        </form>
      )}
    />

    {error && <Message {...error} />}
    <SignIn classes={classes} />
  </Layout>
));

export default withStyles(styles)(Reset);
